import { Loader2 } from 'lucide-react';

export default function Spinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex justify-center items-center">
      <Loader2 className={`animate-spin text-primary ${sizeClasses[size]}`} />
    </div>
  );
}