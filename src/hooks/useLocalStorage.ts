'use client';

import { useState, useEffect } from 'react';

function getStorageValue<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') {
    return defaultValue;
  }
  const saved = localStorage.getItem(key);
  try {
    return saved ? JSON.parse(saved) : defaultValue;
  } catch (error) {
    console.error('Error parsing JSON from localStorage', error);
    return defaultValue;
  }
}

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    return getStorageValue(key, initialValue);
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}