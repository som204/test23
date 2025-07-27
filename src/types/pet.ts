export interface  Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: 'male' | 'female';
  bio: string;
  photos: string[];
}

export interface PetProfile extends Pet {
  ownerId: string;
}