import { Button } from "@/components/ui/button";
import { Code2, Search, Webhook } from "lucide-react";

export const DeveloperToolsSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">
            DEVELOPER TOOLS FOR
            <br />
            BITCOIN LAYERS
            <sup className="text-[#ff4b26] ml-2">[+]</sup>
          </h2>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono">VIEW:</span>
              <div className="flex gap-2">
                <Button variant="outline" className="text-xs font-mono bg-gray-100">
                  FEATURED
                </Button>
                <Button variant="outline" className="text-xs font-mono bg-[#ff4b26] text-white">
                  BITCOIN
                </Button>
                <Button variant="outline" className="text-xs font-mono">
                  STACKS
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm font-mono">MODE:</span>
              <div className="flex gap-2">
                <Button variant="outline" className="text-xs font-mono bg-[#ff4b26] text-white">
                  BENTO
                </Button>
                <Button variant="outline" className="text-xs font-mono">
                  TREE
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tool cards */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <span className="inline-block px-3 py-1 bg-gray-200 text-sm font-mono rounded mb-4">
              BITCOIN
            </span>
            <h3 className="text-2xl font-bold mb-2">Ordinals Explorer</h3>
            <p className="text-gray-600 mb-8">
              Search, filter, and explore Ordinals inscriptions.
            </p>
            <div className="h-48 flex items-center justify-center bg-gray-200 rounded-lg">
              <Search className="h-16 w-16 text-gray-400" />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <span className="inline-block px-3 py-1 bg-gray-200 text-sm font-mono rounded mb-4">
              BITCOIN
            </span>
            <h3 className="text-2xl font-bold mb-2">Bitcoin Indexer</h3>
            <p className="text-gray-600 mb-8">
              Build indexers, standards and protocols on top of Ordinals, BRC-20, Runes, and more.
            </p>
            <div className="h-48 flex items-center justify-center bg-gray-200 rounded-lg">
              <Code2 className="h-16 w-16 text-gray-400" />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <span className="inline-block px-3 py-1 bg-gray-200 text-sm font-mono rounded mb-4">
              BITCOIN
            </span>
            <h3 className="text-2xl font-bold mb-2">Ordinals API</h3>
            <p className="text-gray-600 mb-8">
              Production-hardened API for Ordinals.
            </p>
            <div className="h-48 flex items-center justify-center bg-gray-200 rounded-lg">
              <Webhook className="h-16 w-16 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};