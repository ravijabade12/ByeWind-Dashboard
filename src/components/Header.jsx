import React, { useState } from "react";
import {
  Search,
  Sun,
  Moon,
  RotateCcw,
  Bell,
  Sidebar,
  Menu,
  Star,
  Grid3X3,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { SearchInput } from "./ui/Input";
import { Button } from "./ui/Button";

export const Header = ({
  onToggleSidebar,
  showSidebarToggle = false,
  onToggleNotifications,
  showNotificationToggle = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="bg-white h-[68px] dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 sm:px-7 py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1 min-w-0">
          {showSidebarToggle && (
            <Button
              variant="icon"
              size="sm"
              onClick={onToggleSidebar}
              className="mr-2 lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
          )}

          <div className="flex items-center">
            <Button variant="icon" size="sm" className="hidden sm:flex">
              <Sidebar className="w-4 h-4" />
            </Button>
            <Button variant="icon" size="sm" className="hidden sm:flex">
              <Star className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex items-center pl-2 sm:pl-4 space-x-2 text-sm text-gray-600 dark:text-gray-400 min-w-0">
            <span className="hidden sm:inline">Dashboards</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-gray-900 dark:text-white truncate">
              Default
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-4">
          {/* Search - Hidden on mobile, shown on sm+ */}
          <div className="hidden sm:block w-32 lg:w-40">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 pl-10 text-sm placeholder-gray-400 shadow-sm transition-colors focus:border-gray-400 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-gray-500"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-xs text-gray-400">⌘/</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            {/* Mobile search icon */}
            <Button variant="icon" size="sm" className="sm:hidden">
              <Search className="w-4 h-4" />
            </Button>

            {/* Theme toggle - Always visible */}
            <Button variant="icon" size="sm" onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>

            {/* Refresh - Hidden on mobile */}
            <Button variant="icon" size="sm" className="hidden sm:flex">
              <RotateCcw className="w-4 h-4" />
            </Button>

            {/* Bell - Always visible */}
            <Button variant="icon" size="sm">
              <Bell className="w-4 h-4" />
            </Button>

            {/* Mobile notification toggle */}
            {showNotificationToggle && (
              <Button
                variant="icon"
                size="sm"
                onClick={onToggleNotifications}
                className="lg:hidden"
              >
                <Bell className="w-4 h-4" />
              </Button>
            )}

            {/* Grid icon - Hidden on mobile */}
            <Button variant="icon" size="sm" className="hidden sm:flex">
              <Sidebar className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
