import React from 'react';
import { Search } from 'lucide-react';

export const Input = ({
  icon,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        className={`
          block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm
          placeholder-gray-400 shadow-sm transition-colors
          focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500
          disabled:bg-gray-50 disabled:text-gray-500
          dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
          dark:focus:border-blue-400 dark:focus:ring-blue-400
          ${icon ? 'pl-10' : ''}
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export const SearchInput = ({
  onSearch,
  onChange,
  ...props
}) => {
  const handleChange = (e) => {
    onChange?.(e);
    onSearch?.(e.target.value);
  };

  return (
    <Input
      icon={<Search className="w-4 h-4 text-gray-400" />}
      onChange={handleChange}
      {...props}
    />
  );
};