'use client';

import { createContext, ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { AuthContextType, User } from '@/types/auth';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<User | null>('user', null);

  const login = (token: string) => {
    // In a real app, you'd decode the token to get user info
    const mockUser = { id: '1', email: 'user@example.com', token };
    setUser(mockUser);
  };

  const signup = (token: string) => {
    const mockUser = { id: '2', email: 'newuser@example.com', token };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, signup, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}