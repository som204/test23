'use client';

import { useState } from 'react';
import { Edit, Image, Save } from 'lucide-react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Avatar from '@/components/ui/Avatar';
import Card from '@/components/ui/Card';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [petProfile, setPetProfile] = useState({
    name: 'Buddy',
    species: 'Dog',
    breed: 'Golden Retriever',
    age: 3,
    bio: 'Loves long walks on the beach and chasing squirrels.',
    photo: 'https://picsum.photos/id/1025/200/200'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPetProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold font-headings mb-6">Your Pet's Profile</h1>
      <Card className="p-6">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 flex flex-col items-center space-y-4">
            <Avatar src={petProfile.photo} alt={petProfile.name} size="xl" />
            {isEditing && (
              <Button variant="outline" size="sm"><Image className="mr-2 h-4 w-4" /> Change Photo</Button>
            )}
          </div>
          <div className="md:col-span-2 space-y-4">
            {!isEditing ? (
              <>
                <h2 className="text-2xl font-bold font-headings">{petProfile.name}</h2>
                <p><span className="font-semibold">Species:</span> {petProfile.species}</p>
                <p><span className="font-semibold">Breed:</span> {petProfile.breed}</p>
                <p><span className="font-semibold">Age:</span> {petProfile.age} years</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{petProfile.bio}</p>
                <Button onClick={() => setIsEditing(true)} className="mt-4"><Edit className="mr-2 h-4 w-4" /> Edit Profile</Button>
              </>
            ) : (
              <form className="space-y-4">
                <Input label="Name" name="name" value={petProfile.name} onChange={handleInputChange} />
                <Input label="Species" name="species" value={petProfile.species} onChange={handleInputChange} />
                <Input label="Breed" name="breed" value={petProfile.breed} onChange={handleInputChange} />
                <Input label="Age" name="age" type="number" value={petProfile.age} onChange={handleInputChange} />
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
                  <textarea name="bio" value={petProfile.bio} onChange={handleInputChange} rows={4} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-gray-700 dark:border-gray-600"></textarea>
                </div>
                <div className="flex gap-4">
                  <Button onClick={() => setIsEditing(false)}><Save className="mr-2 h-4 w-4" /> Save Changes</Button>
                  <Button onClick={() => setIsEditing(false)} variant="outline">Cancel</Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}