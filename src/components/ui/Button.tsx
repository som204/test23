'use client';

import React from 'react';
import Spinner from './Spinner';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-backgroundDark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm';

const variantStyles = {
  primary: 'bg-primary text-white hover:bg-orange-600 focus:ring-primary',
  secondary: 'bg-secondary text-white hover:bg-indigo-700 focus:ring-secondary',
  accent: 'bg-accent text-gray-800 hover:bg-yellow-400 focus:ring-accent',
  outline: 'border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400',
  ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400 shadow-none',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', isLoading = false, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? <Spinner size="sm" /> : children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;