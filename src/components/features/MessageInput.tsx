'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '@/components/ui/Button';

interface MessageInputProps {
  onSend: (text: string) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-600"
      />
      <Button onClick={handleSend} size="sm" className="rounded-full p-3">
        <Send className="h-5 w-5" />
      </Button>
    </div>
  );
}