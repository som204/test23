'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PawPrint, Menu, X, Sun, Moon, User, LogIn, LogOut } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/ui/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const navLinks = [
    { href: "/discover", label: "Discover" },
    { href: "/chat", label: "Chat" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-backgroundDark/80 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headings text-primary">
          <PawPrint className="w-8 h-8" />
          <span>PawMingle</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="font-semibold text-textLight dark:text-textDark hover:text-primary dark:hover:text-primary transition-colors">{link.label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={toggleTheme} variant="ghost" size="sm" className="p-2">
            {theme === 'light' ? <Moon /> : <Sun />}
          </Button>
          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <>
                <Link href="/profile"><Button variant="ghost" size="sm"><User className="mr-2 h-4 w-4"/>Profile</Button></Link>
                <Button onClick={logout} variant="secondary" size="sm"><LogOut className="mr-2 h-4 w-4"/>Logout</Button>
              </>
            ) : (
              <>
                <Link href="/auth/login"><Button variant="ghost" size="sm"><LogIn className="mr-2 h-4 w-4"/>Login</Button></Link>
                <Link href="/auth/signup"><Button variant="primary" size="sm">Sign Up</Button></Link>
              </>
            )}
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-backgroundDark p-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="block py-2 font-semibold hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
          ))}
          <hr className="border-gray-200 dark:border-gray-700"/>
          {user ? (
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/profile"><Button variant="ghost" className="w-full justify-start"><User className="mr-2 h-4 w-4"/>Profile</Button></Link>
              <Button onClick={() => { logout(); setIsMenuOpen(false); }} variant="secondary" className="w-full"><LogOut className="mr-2 h-4 w-4"/>Logout</n
            </div>
          ) : (
            <div className="flex flex-col gap-2 pt-2">
              <Link href="/auth/login"><Button variant="ghost" className="w-full justify-start"><LogIn className="mr-2 h-4 w-4"/>Login</Button></Link>
              <Link href="/auth/signup"><Button variant="primary" className="w-full">Sign Up</Button></Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}