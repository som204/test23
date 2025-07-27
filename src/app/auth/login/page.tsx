'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      login('fake-auth-token'); // Mock login
      router.push('/discover');
    } catch (err) {
      setError('Invalid email or password.');
    }
  };

  return (
    <Card className="p-8 space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headings">Welcome Back!</h2>
        <p className="text-gray-500 dark:text-gray-400">Sign in to find a friend for your pet.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-sm text-error text-center">{error}</p>}
        <Input label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
        <Input label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" />
        <Button type="submit" className="w-full">Log In</Button>
      </form>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        Don't have an account?{' '}
        <Link href="/auth/signup" className="font-medium text-primary hover:underline">Sign up</Link>
      </p>
    </Card>
  );
}