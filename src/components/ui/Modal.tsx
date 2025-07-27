'use client';

import { X } from 'lucide-react';
import React from 'react';
import Card from './Card';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 transition-opacity duration-300 animate-fade-in" onClick={onClose}>
      <Card className="w-full max-w-md p-6 relative animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold font-headings">{title}</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div>{children}</div>
      </Card>
    </div>
  );
}