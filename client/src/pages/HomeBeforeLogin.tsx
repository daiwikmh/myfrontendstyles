import Hero from '@/components/Hero';
import Navigation from '@/components/navigation/Navigation';

const HomeBeforeLogin = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
    </div>
  );
};

export default HomeBeforeLogin;