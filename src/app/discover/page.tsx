'use client';

import { useState, useEffect } from 'react';
import { Heart, X } from 'lucide-react';
import PetProfileCard from '@/components/features/PetProfileCard';
import Button from '@/components/ui/Button';
import Spinner from '@/components/ui/Spinner';
import { Pet } from '@/types/pet';
import MatchNotification from '@/components/features/MatchNotification';

const mockPets: Pet[] = [
  { id: '1', name: 'Buddy', species: 'Dog', breed: 'Golden Retriever', age: 3, gender: 'male', bio: 'Loves long walks on the beach and chasing squirrels.', photos: ['https://picsum.photos/id/1025/400/500'] },
  { id: '2', name: 'Lucy', species: 'Cat', breed: 'Siamese', age: 2, gender: 'female', bio: 'A professional napper and cuddler. Will judge you silently.', photos: ['https://picsum.photos/id/1062/400/500'] },
  { id: '3', name: 'Rocky', species: 'Dog', breed: 'Boxer', age: 5, gender: 'male', bio: 'Full of energy! Looking for a running partner.', photos: ['https://picsum.photos/id/1074/400/500'] },
  { id: '4', name: 'Mochi', species: 'Rabbit', breed: 'Holland Lop', age: 1, gender: 'female', bio: 'I enjoy carrots, hay, and hopping around.', photos: ['https://picsum.photos/id/219/400/500'] },
];

export default function DiscoverPage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showMatch, setShowMatch] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPets(mockPets);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSwipe = (action: 'like' | 'dislike') => {
    if (currentIndex < pets.length - 1) {
      if (action === 'like' && Math.random() > 0.7) { // 30% chance of a match
        setShowMatch(true);
      }
      setCurrentIndex(currentIndex + 1);
    } else {
      // Reached end of profiles
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-96"><Spinner /></div>;
  }

  if (currentIndex >= pets.length) {
    return <div className="text-center h-96 flex flex-col justify-center items-center"><h2 className="text-2xl font-bold">No more pets to show!</h2><p className="text-gray-500 mt-2">Check back later for new furry friends.</p></div>;
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <h1 className="text-3xl font-bold font-headings">Discover New Friends</h1>
      <div className="relative w-full max-w-sm h-[550px]">
        <PetProfileCard pet={pets[currentIndex]} />
      </div>
      <div className="flex items-center gap-8">
        <Button onClick={() => handleSwipe('dislike')} variant="outline" size="lg" className="rounded-full p-4 border-2 border-error text-error hover:bg-error/10">
          <X size={32} />
        </Button>
        <Button onClick={() => handleSwipe('like')} variant="outline" size="lg" className="rounded-full p-4 border-2 border-success text-success hover:bg-success/10">
          <Heart size={32} />
        </Button>
      </div>
      <MatchNotification isOpen={showMatch} onClose={() => setShowMatch(false)} petName={pets[currentIndex]?.name || 'a new friend'} />
    </div>
  );
}