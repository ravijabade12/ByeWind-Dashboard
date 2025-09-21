import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export const MetricCard = ({
  title,
  value,
  change,
  trend,
  className = "",
  highlight = false,
}) => {
  const isPositive = trend === "up";

  return (
    <div
      className={`
      bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 shadow-sm border border-blue-200 dark:border-blue-800
      transition-all duration-200 hover:shadow-md
      ${className}
    `}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {typeof value === "number" ? value.toLocaleString() : value}
          </p>
        </div>
        <div
          className={`
          flex items-center space-x-1 text-sm font-medium px-2 py-1 rounded-full
          ${
            isPositive
              ? "text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30"
              : "text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30"
          }
        `}
        >
          {isPositive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
};
