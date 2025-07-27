'use client';

import { Pet } from '@/types/pet';
import Card from '@/components/ui/Card';

interface PetProfileCardProps {
  pet: Pet;
}

export default function PetProfileCard({ pet }: PetProfileCardProps) {
  return (
    <Card className="w-full h-full overflow-hidden flex flex-col shadow-2xl transform transition-transform duration-500 hover:scale-105">
      <div className="relative h-3/4">
        <img src={pet.photos[0]} alt={pet.name} className="w-full h-full object-cover" crossOrigin="anonymous" />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h3 className="text-2xl font-bold font-headings">{pet.name}, {pet.age}</h3>
          <p className="text-sm">{pet.breed}</p>
        </div>
      </div>
      <div className="p-4 h-1/4">
        <p className="text-gray-700 dark:text-gray-300 text-sm italic">\"{pet.bio}\"</p>
      </div>
    </Card>
  );
}