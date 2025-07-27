import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} PawMingle. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}