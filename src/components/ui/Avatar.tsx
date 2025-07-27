import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
  xl: 'h-32 w-32',
};

export default function Avatar({ src, alt = 'avatar', size = 'md' }: AvatarProps) {
  return (
    <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" crossOrigin="anonymous" />
      ) : (
        <span className="font-bold text-gray-500">{alt.charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
}