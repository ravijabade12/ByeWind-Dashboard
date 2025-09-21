import React from "react";

export const BarChart = ({ data, height = 240, className = "" }) => {
  // Updated data to match the design image exactly
  const chartData = [
    { month: "Jan", actuals: 16, projections: 4 },
    { month: "Feb", actuals: 20, projections: 4 },
    { month: "Mar", actuals: 17, projections: 4 },
    { month: "Apr", actuals: 22, projections: 4 },
    { month: "May", actuals: 14, projections: 3 },
    { month: "Jun", actuals: 19, projections: 5 },
  ];

  const maxValue = 30;
  const padding = 40;
  const chartHeight = height - padding * 2;
  const chartWidth = 400 - padding * 2;
  const barWidth = (chartWidth / chartData.length) * 0.6;
  const barSpacing = (chartWidth / chartData.length) * 0.4;

  const getX = (index) =>
    index * (chartWidth / chartData.length) + padding + barSpacing / 2;
  const getY = (value) => height - (value / maxValue) * chartHeight - padding;
  const getBarHeight = (value) => (value / maxValue) * chartHeight;

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
            id="projectionsGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#93C5FD", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#60A5FA", stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id="actualsGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#1E40AF", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#1D4ED8", stopOpacity: 1 }}
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

        {/* Stacked Bars */}
        {chartData.map((d, i) => {
          const x = getX(i);
          const actualsHeight = getBarHeight(d.actuals);
          const projectionsHeight = getBarHeight(d.projections);
          const actualsY = getY(d.actuals);
          const projectionsY = getY(d.actuals + d.projections);

          return (
            <g key={i}>
              {/* Actuals bar (bottom, darker blue) */}
              <rect
                x={x}
                y={actualsY}
                width={barWidth}
                height={actualsHeight}
                fill="url(#actualsGradient)"
                rx="3"
                ry="3"
              />

              {/* Projections bar (top, lighter blue) */}
              <rect
                x={x}
                y={projectionsY}
                width={barWidth}
                height={projectionsHeight}
                fill="url(#projectionsGradient)"
                rx="3"
                ry="3"
              />
            </g>
          );
        })}

        {/* X-axis labels */}
        {chartData.map((d, i) => (
          <text
            key={i}
            x={getX(i) + barWidth / 2}
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
