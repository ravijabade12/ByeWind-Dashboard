import React, { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { DataTable } from "./components/DataTable";
import { NotificationPanel } from "./components/NotificationPanel";
import { orders } from "./data/mockData";

function App() {
  const [activeRoute, setActiveRoute] = useState("default");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationPanelOpen, setNotificationPanelOpen] = useState(false);

  const renderContent = () => {
    switch (activeRoute) {
      case "default":
      case "ecommerce":
        return <Dashboard />;
      case "projects":
      case "overview":
        return (
          <div className="p-6">
            <DataTable data={orders} />
          </div>
        );
      default:
        // For all other routes, show nothing (empty content)
        return (
          <div className="p-6 flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No Content Available
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                This section is under development.
              </p>
            </div>
          </div>
        );
    }
  };

  const shouldShowNotificationPanel =
    activeRoute === "default" || activeRoute === "ecommerce";

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex">
        {/* Sidebar */}
        <div
          className={`
          fixed inset-y-0 left-0 z-50 lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }
        `}
        >
          <Sidebar activeRoute={activeRoute} onRouteChange={setActiveRoute} />
        </div>

        {/* Sidebar Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header - Only spans main content width */}
          <Header
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            showSidebarToggle
            onToggleNotifications={() =>
              setNotificationPanelOpen(!notificationPanelOpen)
            }
            showNotificationToggle={shouldShowNotificationPanel}
          />

          {/* Main Content */}
          <div className="flex-1 overflow-hidden">{renderContent()}</div>
        </div>

        {/* Notification Panel - Starts from top, separate from main content */}
        {shouldShowNotificationPanel && (
          <>
            {/* Desktop - Always visible */}
            <div className="hidden lg:block w-70 h-screen border-l border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
              <NotificationPanel isOpen={true} onClose={() => {}} />
            </div>

            {/* Mobile - Slide-out panel */}
            <div
              className={`lg:hidden ${
                notificationPanelOpen ? "block" : "hidden"
              }`}
            >
              <NotificationPanel
                isOpen={notificationPanelOpen}
                onClose={() => setNotificationPanelOpen(false)}
              />
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
