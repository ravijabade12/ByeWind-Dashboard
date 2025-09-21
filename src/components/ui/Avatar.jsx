import React from 'react';

export const Avatar = ({ src, alt, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
      onError={(e) => {
        const target = e.target;
        target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${alt}`;
      }}
    />
  );
};