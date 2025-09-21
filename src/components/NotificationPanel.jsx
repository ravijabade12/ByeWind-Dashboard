import React from "react";
import { X, Bug, User, Radio } from "lucide-react";
import { Avatar } from "./ui/Avatar";
import { Button } from "./ui/Button";
import { notifications, activities, contacts } from "../data/mockData";

export const NotificationPanel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-70 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-xl z-50 transform transition-transform duration-300 ease-in-out lg:relative lg:shadow-none lg:z-auto lg:h-full">
      <div className="p-5 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Notifications
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="lg:hidden"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="h-full flex flex-col justify-start">
        {/* Notifications */}
        <div className="p-5 space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-3">
              <div
                className={`
                w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                ${
                  notification.type === "bug"
                    ? "bg-blue-100 text-gray-900 dark:bg-blue-900/30 dark:text-gray-100"
                    : notification.type === "user"
                    ? "bg-blue-100 text-gray-900 dark:bg-blue-900/30 dark:text-gray-100"
                    : notification.type === "subscription"
                    ? "bg-blue-100 text-gray-900 dark:bg-blue-900/30 dark:text-gray-100"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                }
              `}
              >
                {notification.type === "bug" ? (
                  <Bug className="w-4 h-4" />
                ) : notification.type === "user" ? (
                  <User className="w-4 h-4" />
                ) : notification.type === "subscription" ? (
                  <Radio className="w-4 h-4" />
                ) : (
                  <User className="w-4 h-4" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {notification.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {notification.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Activities */}
        <div className="px-5 pb-4">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Activities
          </h4>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <Avatar
                  src={activity.user.avatar}
                  alt={activity.user.name}
                  size="sm"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div className="px-5 pb-6">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
            Contacts
          </h4>
          <div className="space-y-3">
            {contacts.map((contact) => (
              <div key={contact.id} className="flex items-center space-x-3">
                <Avatar src={contact.avatar} alt={contact.name} size="sm" />
                <span className="text-sm text-gray-900 dark:text-white">
                  {contact.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
