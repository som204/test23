import { PawPrint } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto prose dark:prose-invert lg:prose-xl">
      <h1 className="flex items-center gap-3 font-headings"><PawPrint className="w-10 h-10 text-primary"/> About PawMingle</h1>
      
      <h2>Our Mission</h2>
      <p>At PawMingle, our mission is to build a joyful and safe community for pets and their owners. We believe that social interaction is vital for a pet's happiness and well-being. Our platform is designed to make it easy and fun to find compatible playmates, helping your pet live its best social life.</p>
      
      <h2>How It Works</h2>
      <ol>
        <li><strong>Create a Profile:</strong> Sign up and create a unique profile for your pet, showcasing their personality, photos, and preferences.</li>
        <li><strong>Discover & Swipe:</strong> Browse through profiles of other pets in your area. Swipe right on the ones you think would be a great match for your pet.</li>
        <li><strong>Match & Chat:</strong> When there's a mutual like, it's a match! You can then chat with the other pet owner to arrange a playdate.</li>
      </ol>

      <h2>Frequently Asked Questions</h2>
      <h3>Is PawMingle safe?</h3>
      <p>We encourage all users to arrange initial meetups in public,  pet-friendly places. Always supervise your pets during playdates. Your safety and your pet's safety are our top priorities.</p>
      <h3>Is the app free?</h3>
      <p>Yes, PawMingle is free to use! We aim to connect as many pets as possible, and we believe cost shouldn't be a barrier to finding a new friend.</p>
    </div>
  );
}