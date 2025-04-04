import { Button } from "@/components/ui/button";
import { Glasses as Sunglasses } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
      <div className="flex items-center gap-2">
        <Sunglasses className="w-8 h-8" />
        <span className="text-xl font-bold">bebop</span>
      </div>
      <Button variant="outline" className="bg-white text-black hover:bg-gray-200">
        Start trading
      </Button>
    </nav>
  );
};

export default Navigation;