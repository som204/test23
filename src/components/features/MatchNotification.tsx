'use client';

import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { Heart } from 'lucide-react';

interface MatchNotificationProps {
  isOpen: boolean;
  onClose: () => void;
  petName: string;
}

export default function MatchNotification({ isOpen, onClose, petName }: MatchNotificationProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="It's a Match!">
      <div className="text-center space-y-4">
        <Heart className="w-16 h-16 text-primary mx-auto animate-pulse" />
        <p className="text-lg">You and {petName}'s owner have liked each other!</p>
        <div className="flex justify-center gap-4">
          <Link href="/chat">
            <Button>Send a Message</Button>
          </Link>
          <Button variant="outline" onClick={onClose}>Keep Swiping</Button>
        </div>
      </div>
    </Modal>
  );
}