import Link from 'next/link';
import { PawPrint } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center px-4">
      <PawPrint className="w-16 h-16 text-primary mb-4 animate-bounce" />
      <h1 className="text-6xl font-bold font-headings">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">Oops! Looks like this page is playing hide and seek.</p>
      <Link href="/">
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
}