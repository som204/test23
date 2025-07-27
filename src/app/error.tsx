'use client';

import { AlertTriangle } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <AlertTriangle className="w-16 h-16 text-error mb-4" />
      <h1 className="text-4xl font-bold font-headings mb-2">Something Went Wrong</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{error.message || "An unexpected error occurred."}</p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}