'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    try {
      signup('fake-auth-token'); // Mock signup
      router.push('/profile'); // Redirect to profile to create pet profile
    } catch (err) {
      setError('Failed to create an account.');
    }
  };

  return (
    <Card className="p-8 space-y-6 animate-fade-in">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headings">Join PawMingle</h2>
        <p className="text-gray-500 dark:text-gray-400">Create an account to get started.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-sm text-error text-center">{error}</p>}
        <Input label="Email" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" />
        <Input label="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" />
        <Input label="Confirm Password" id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="••••••••" />
        <Button type="submit" className="w-full">Sign Up</Button>
      </form>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        Already have an account?{' '}
        <Link href="/auth/login" className="font-medium text-primary hover:underline">Log in</Link>
      </p>
    </Card>
  );
}