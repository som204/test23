import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] bg-gray-50 dark:bg-backgroundDark">
      <div className="w-full max-w-md p-8">
        {children}
      </div>
    </div>
  );
}