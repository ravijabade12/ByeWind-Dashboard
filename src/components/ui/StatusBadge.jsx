import React from 'react';

export const StatusBadge = ({ status, className = '' }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Complete':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'Pending':
        return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Approved':
        return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400';
      case 'Rejected':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${getStatusStyles(status)} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
        status === 'In Progress' ? 'bg-blue-500' :
        status === 'Complete' ? 'bg-green-500' :
        status === 'Pending' ? 'bg-orange-500' :
        status === 'Approved' ? 'bg-emerald-500' :
        status === 'Rejected' ? 'bg-red-500' : 'bg-gray-500'
      }`} />
      {status}
    </span>
  );
};