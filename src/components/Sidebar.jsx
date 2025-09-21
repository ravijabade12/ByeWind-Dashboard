import React from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BookOpen,
  User,
  Building2,
  FileText,
  MessageCircle,
  Star,
  Clock,
  ChevronDown,
} from "lucide-react";

const navigationItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "projects", label: "Projects", icon: Package },
];

const dashboardItems = [
  { id: "default", label: "Default", icon: LayoutDashboard, active: true },
  { id: "ecommerce", label: "eCommerce", icon: ShoppingCart },
  { id: "projects-dashboard", label: "Projects", icon: Package },
  { id: "online-courses", label: "Online Courses", icon: BookOpen },
];

const pageItems = [
  {
    id: "user-profile",
    label: "User Profile",
    icon: User,
    subItems: [
      { id: "overview", label: "Overview" },
      { id: "projects", label: "Projects" },
      { id: "campaigns", label: "Campaigns" },
      { id: "documents", label: "Documents" },
      { id: "followers", label: "Followers" },
    ],
  },
  { id: "account", label: "Account", icon: User },
  { id: "corporate", label: "Corporate", icon: Building2 },
  { id: "blog", label: "Blog", icon: FileText },
  { id: "social", label: "Social", icon: MessageCircle },
];

export const Sidebar = ({ activeRoute, onRouteChange }) => {
  const [expandedItems, setExpandedItems] = React.useState(["user-profile"]);

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderNavItem = (item, isSubItem = false) => {
    const isActive = activeRoute === item.id;
    const isExpanded = expandedItems.includes(item.id);
    const hasSubItems = item.subItems && item.subItems.length > 0;

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (hasSubItems) {
              toggleExpanded(item.id);
            } else {
              onRouteChange(item.id);
            }
          }}
          className={`
            w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors
            ${
              isActive
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            }
            ${isSubItem ? "ml-6 pl-6" : ""}
          `}
        >
          <div className="flex items-center">
            {!isSubItem && item.icon && <item.icon className="w-4 h-4 mr-3" />}
            <span>{item.label}</span>
          </div>
          {hasSubItems && (
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          )}
        </button>

        {hasSubItems && isExpanded && (
          <div className="mt-1 space-y-1">
            {item.subItems.map((subItem) => renderNavItem(subItem, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col h-full">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&dpr=1"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="ml-3 font-semibold text-gray-900 dark:text-white">
            ByeWind
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-6 pb-6">
        {/* Favorites & Recently */}
        <div className="mb-6">
          <div className="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
            <Star className="w-3 h-3 mr-2" />
            Favorites
            <Clock className="w-3 h-3 ml-4 mr-2" />
            Recently
          </div>
          <div className="space-y-1">
            {navigationItems.map((item) => renderNavItem(item))}
          </div>
        </div>

        {/* Dashboards */}
        <div className="mb-6">
          <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
            Dashboards
          </h3>
          <div className="space-y-1">
            {dashboardItems.map((item) => renderNavItem(item))}
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-3">
            Pages
          </h3>
          <div className="space-y-1">
            {pageItems.map((item) => renderNavItem(item))}
          </div>
        </div>
      </div>
    </div>
  );
};
