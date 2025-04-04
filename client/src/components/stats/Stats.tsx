import { Infinity } from "lucide-react";

const Stats = () => {
  return (
    <div className="bg-[#004d1a] w-full py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div className="text-left">
          <h3 className="text-[#c0ff00] text-2xl mb-4">Token coverage</h3>
          <div className="text-[#c0ff00] text-6xl">
            <Infinity className="w-20 h-20" />
          </div>
        </div>
        <div className="text-left">
          <h3 className="text-[#c0ff00] text-2xl mb-4">Total volume</h3>
          <div className="text-[#c0ff00] text-6xl font-bold">$75bn+</div>
        </div>
        <div className="text-left">
          <h3 className="text-[#c0ff00] text-2xl mb-4">Liquidity sources</h3>
          <div className="text-[#c0ff00] text-6xl font-bold">15</div>
        </div>
        <div className="text-left">
          <h3 className="text-[#c0ff00] text-2xl mb-4">13 networks</h3>
          <div className="grid grid-cols-4 gap-2">
            {Array(12).fill(0).map((_, i) => (
              <div key={i} className="w-8 h-8 bg-[#c0ff00] rounded-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;