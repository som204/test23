'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, name, type = 'text', error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label htmlFor={id || name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>}
        <input
          ref={ref}
          id={id || name}
          name={name}
          type={type}
          className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${error ? 'border-error' : ''} ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-error">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;