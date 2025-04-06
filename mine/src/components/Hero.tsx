import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Bitcoin, ChevronRight, Layers, Code2, Webhook, Search, Plus } from "lucide-react";
import { Navigation } from "./navigation/Navigation";
import { HeroSection } from "./sections/HeroSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { DeveloperToolsSection } from "./sections/DeveloperToolsSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DeveloperToolsSection />
    </div>
  );
}

export default App;