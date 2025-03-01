import React from 'react';
import Link from 'next/link';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  className = '', 
  ...props 
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors';
  
  const variantClasses = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white',
    secondary: 'border border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/10',
    tertiary: 'text-primary-500 hover:text-primary-600'
  };
  
  const sizeClasses = {
    sm: 'py-1.5 px-3 text-sm',
    md: 'py-2 px-4',
    lg: 'py-3 px-6 text-lg'
  };
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={allClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={allClasses} {...props}>
      {children}
    </button>
  );
} 