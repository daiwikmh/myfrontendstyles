import { Button } from "@/components/ui/button";
import { ChevronRight, Layers } from "lucide-react";

export const HeroSection = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="text-center font-aeonik">
        <div className="flex justify-center mb-8">
          <Layers className="h-24 w-24 text-black" />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 font-aeonik">
          BUILD ON
          <br />
          BITCOIN LAYERS.
        </h1>
        <p className="text-xl text-gray-600 mb-12 font-aeonik">
          Building on Bitcoin is hard. Hiro's developer tools
          <br />
          make it easier.
        </p>
        <Button className="bg-gray-200 hover:bg-gray-300 text-black group font-aeonik">
          Start building
          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </main>
  );
};