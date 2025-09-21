import React from "react";

export const LineChart = ({ data, height = 200, className = "" }) => {
  // Updated data to match the design image exactly
  const chartData = [
    { month: "Jan", current: 12, previous: 7 },
    { month: "Feb", current: 7, previous: 17 },
    { month: "Mar", current: 12, previous: 15 },
    { month: "Apr", current: 16, previous: 10 },
    { month: "May", current: 20, previous: 18 },
    { month: "Jun", current: 18, previous: 23 },
  ];

  const maxValue = 30;
  const padding = 40;
  const chartHeight = height - padding * 2;
  const chartWidth = 400 - padding * 2;

  const getX = (index) =>
    (index / (chartData.length - 1)) * chartWidth + padding;
  const getY = (value) => height - (value / maxValue) * chartHeight - padding;

  const currentPath = chartData
    .map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d.current)}`)
    .join(" ");
  const previousPath = chartData
    .map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d.previous)}`)
    .join(" ");

  return (
    <div className={`relative ${className}`}>
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 400 ${height}`}
        className="overflow-visible"
      >
        <defs>
          <linearGradient
            id="currentGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#000000", stopOpacity: 0.1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#000000", stopOpacity: 0 }}
            />
          </linearGradient>
          <linearGradient
            id="previousGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#60A5FA", stopOpacity: 0.1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#60A5FA", stopOpacity: 0 }}
            />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 10, 20, 30].map((value) => (
          <line
            key={value}
            x1={padding}
            y1={getY(value)}
            x2={chartWidth + padding}
            y2={getY(value)}
            stroke="currentColor"
            strokeOpacity="0.1"
            className="text-gray-300 dark:text-gray-700"
          />
        ))}

        {/* Previous week area */}
        <path
          d={`${previousPath} L ${getX(chartData.length - 1)} ${
            height - padding
          } L ${padding} ${height - padding} Z`}
          fill="url(#previousGradient)"
        />

        {/* Current week area */}
        <path
          d={`${currentPath} L ${getX(chartData.length - 1)} ${
            height - padding
          } L ${padding} ${height - padding} Z`}
          fill="url(#currentGradient)"
        />

        {/* Previous week line (light blue dashed) */}
        <path
          d={previousPath}
          fill="none"
          stroke="#60A5FA"
          strokeWidth="2"
          strokeDasharray="5,5"
        />

        {/* Current week line (black solid) */}
        <path d={currentPath} fill="none" stroke="#000000" strokeWidth="2" />

        {/* Data points */}
        {chartData.map((d, i) => (
          <g key={i}>
            <circle
              cx={getX(i)}
              cy={getY(d.current)}
              r="3"
              fill="#000000"
              stroke="#fff"
              strokeWidth="2"
              className="dark:stroke-gray-900"
            />
            <circle
              cx={getX(i)}
              cy={getY(d.previous)}
              r="3"
              fill="#60A5FA"
              stroke="#fff"
              strokeWidth="2"
              className="dark:stroke-gray-900"
            />
          </g>
        ))}

        {/* X-axis labels */}
        {chartData.map((d, i) => (
          <text
            key={i}
            x={getX(i)}
            y={height - 10}
            textAnchor="middle"
            className="text-xs fill-gray-500 dark:fill-gray-400"
          >
            {d.month}
          </text>
        ))}

        {/* Y-axis labels */}
        {[0, 10, 20, 30].map((value) => (
          <text
            key={value}
            x={padding - 10}
            y={getY(value)}
            textAnchor="end"
            dominantBaseline="middle"
            className="text-xs fill-gray-500 dark:fill-gray-400"
          >
            {value}M
          </text>
        ))}
      </svg>
    </div>
  );
};
