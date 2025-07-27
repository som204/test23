import Link from 'next/link';
import { Heart, MessageSquare, PawPrint } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function HomePage() {
  const features = [
    { icon: Heart, title: 'Swipe & Discover', description: 'Fun and intuitive swiping to find pet friends.' },
    { icon: PawPrint, title: 'Instant Matches', description: 'Get notified when there is a mutual connection.' },
    { icon: MessageSquare, title: 'Chat & Connect', description: 'Safely message other owners to arrange playdates.' },
  ];

  return (
    <div className="space-y-20">
      <section 
        className="relative text-center py-20 md:py-32 rounded-xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('https://picsum.photos/id/237/1200/800?grayscale&blur=2')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-white px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold font-headings tracking-tight">Find Your Pet's Perfect Match</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">Join the largest community of pet lovers. Create a profile for your pet, swipe through potential friends, and connect for amazing playdates.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/auth/signup"><Button size="lg" variant="primary">Get Started</Button></Link>
            <Link href="/discover"><Button size="lg" variant="secondary">Discover Pets</Button></Link>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headings">How It Works</h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Swipe, Match, Chat. It's that easy.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 transform hover:-translate-y-2 transition-transform duration-300 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold font-headings mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center bg-secondary text-white py-16 rounded-xl">
        <h2 className="text-3xl md:text-4xl font-bold font-headings">Ready to Mingle?</h2>
        <p className="mt-2 text-lg max-w-xl mx-auto">Join thousands of pets and their owners who are already connecting.</p>
        <div className="mt-6">
          <Link href="/auth/signup"><Button size="lg" variant="accent" className="text-black">Join PawMingle Today</Button></Link>
        </div>
      </section>
    </div>
  );
}