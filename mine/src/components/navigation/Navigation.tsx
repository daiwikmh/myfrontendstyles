import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Bitcoin } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Bitcoin className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold font-aeonik">Hiro</span>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-8 font-aeonik">
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Tools & Infrastructure
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Build
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Resources
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Blog
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4 font-aeonik">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Docs
            </a>
            <Button variant="destructive" className="bg-[#ff4b26] font-aeonik">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};