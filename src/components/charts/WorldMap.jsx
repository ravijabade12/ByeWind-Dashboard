import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

// World map data URL (using a free world map from react-simple-maps)
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export const WorldMap = ({ data, className = "" }) => {
  // Location coordinates for the markers
  const locations = [
    { name: "New York", coordinates: [-74.006, 40.7128], amount: "72K" },
    { name: "San Francisco", coordinates: [-122.4194, 37.7749], amount: "39K" },
    { name: "Sydney", coordinates: [151.2093, -33.8688], amount: "25K" },
    { name: "Singapore", coordinates: [103.8198, 1.3521], amount: "61K" },
  ];

  return (
    <div className={`relative ${className}`}>
      {/* World Map */}
      <div className="relative h-32 mb-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg overflow-hidden">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 80,
            center: [0, 20],
          }}
          width={400}
          height={200}
          className="w-full h-full"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#E5E7EB",
                      stroke: "#D1D5DB",
                      strokeWidth: 0.5,
                    },
                    hover: {
                      fill: "#D1D5DB",
                      stroke: "#9CA3AF",
                      strokeWidth: 0.5,
                    },
                    pressed: {
                      fill: "#D1D5DB",
                      stroke: "#9CA3AF",
                      strokeWidth: 0.5,
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Location markers */}
          {locations.map((location, index) => (
            <Marker key={index} coordinates={location.coordinates}>
              <circle r={3} fill="#000000" stroke="#FFFFFF" strokeWidth={1} />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* Revenue List */}
      <div className="space-y-3">
        {locations.map((location, index) => {
          const maxAmount = Math.max(
            ...locations.map((l) => parseInt(l.amount.replace("K", "")))
          );
          const currentAmount = parseInt(location.amount.replace("K", ""));
          const percentage = (currentAmount / maxAmount) * 100;

          return (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                {location.name}
              </span>
              <div className="flex items-center space-x-3 flex-1">
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white w-12 text-right">
                  {location.amount}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
