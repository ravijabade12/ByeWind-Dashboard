import React from "react";
import { MetricCard } from "./MetricCard";
import { LineChart } from "./charts/LineChart";
import { BarChart } from "./charts/BarChart";
import { DonutChart } from "./charts/DonutChart";
import { WorldMap } from "./charts/WorldMap";
import {
  revenueData,
  projectionsData,
  products,
  salesData,
  locationData,
} from "../data/mockData";

export const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-white dark:bg-gray-950 h-full">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          eCommerce
        </h1>
      </div>

      {/* Top Row - Metrics Cards (2x2) and Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Metrics Cards - 2x2 Grid */}
        <div className=" grid grid-cols-2 gap-6">
          <MetricCard
            title="Customers"
            value="3,781"
            change="+11.01%"
            trend="up"
            highlight
          />
          <MetricCard
            title="Orders"
            value="1,219"
            change="-0.03%"
            trend="down"
          />
          <MetricCard
            title="Revenue"
            value="$695"
            change="+15.03%"
            trend="up"
          />
          <MetricCard title="Growth" value="30.1%" change="+6.08%" trend="up" />
        </div>

        {/* Projections vs Actuals Chart */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Projections vs Actuals
            </h3>
            <BarChart data={projectionsData} />
          </div>
        </div>
      </div>

      {/* Middle Row - Line Chart (70%) and World Map (30%) */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Revenue Line Chart - 70% width */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Revenue
              </h3>
              {/* Legend moved to header */}
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-black rounded-full mr-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Current Week
                  </span>
                  <span className="font-semibold ml-1 text-gray-900 dark:text-white">
                    $58,211
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 border-2 border-blue-400 border-dashed rounded-full mr-2"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Previous Week
                  </span>
                  <span className="font-semibold ml-1 text-gray-900 dark:text-white">
                    $68,768
                  </span>
                </div>
              </div>
            </div>
            <LineChart data={revenueData} height={240} />
          </div>
        </div>

        {/* Revenue by Location - 30% width */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Revenue by Location
            </h3>
            <WorldMap data={locationData} />
          </div>
        </div>
      </div>

      {/* Bottom Row - Products Table (70%) and Donut Chart (30%) */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Top Selling Products - 70% width */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Top Selling Products
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="text-left py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Name
                    </th>
                    <th className="text-right py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Price
                    </th>
                    <th className="text-right py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Quantity
                    </th>
                    <th className="text-right py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 dark:border-gray-800 last:border-0"
                    >
                      <td className="py-3 text-sm text-gray-900 dark:text-white">
                        {product.name}
                      </td>
                      <td className="py-3 text-sm text-gray-900 dark:text-white text-right">
                        ${product.price.toFixed(2)}
                      </td>
                      <td className="py-3 text-sm text-gray-900 dark:text-white text-right">
                        {product.quantity}
                      </td>
                      <td className="py-3 text-sm font-medium text-gray-900 dark:text-white text-right">
                        $
                        {product.amount.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Total Sales - 30% width */}
        <div className="lg:col-span-3">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800 h-full">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Total Sales
            </h3>
            <div className="flex items-center justify-center mb-6">
              <DonutChart data={salesData} size={120} strokeWidth={20} />
            </div>
            <div className="space-y-3">
              {salesData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    ${item.value.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
