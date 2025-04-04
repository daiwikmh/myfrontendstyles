import { Button } from "@/components/ui/button";
import Navigation from "./navigation/Navigation";
// import FloatingIcons from "./hero/FloatingIcons";
import Stats from "./stats/Stats";
import SmarterTech from "./tech/SmarterTech";

const Hero = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navigation />
      <main className="relative min-h-screen flex flex-col items-center justify-center px-0">
        <div className="text-left z-10 max-w-7xl pl-0">
          <h1 className="text-[clamp(8rem,20vw,16rem)] font-bold leading-none mb-15">
            <span className="text-[#c0ff00]">Make your crypto</span>
            <br />
            <span className="text-[#c0ff00]">move with us</span>
          </h1>
          <p className="text-[clamp(2.5rem,6vw,4rem)] text-[#c0ff00] mb-12 font-semibold">
            Want to get the best prices in DeFi right now?
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-24">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8">
              Start trading
            </Button>
            <Button size="lg" variant="outline" className="border-[#4b5563] text-lg px-8">
              Get building
            </Button>
          </div>
          
        </div>
        <Stats />
          <SmarterTech />
      </main>
    </div>
  );
};

export default Hero;