import { Code2, Search, Webhook } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-24 text-left tracking-tighter">
          FEATURES YOU NEED TO BUILD
          <br />
          THE NEXT GENERATION OF
          <br />
          BITCOIN APPS
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Developer friendly APIs that interact with Bitcoin, Ordinals, and Stacks.
            </h3>
            <div className="mb-8 h-48 flex items-center justify-center">
              <Code2 className="h-24 w-24" />
            </div>
            <p className="text-gray-600">
              These API endpoints are valuable for developers that want to query information on addresses, balances, miner-participation, inscriptions, and more.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Trigger actions on Stacks and Bitcoin.
            </h3>
            <div className="mb-8 h-48 flex items-center justify-center">
              <Webhook className="h-24 w-24" />
            </div>
            <p className="text-gray-600">
              <span className="font-medium">Chainhooks</span> are webhook-style triggers for building if_this, then_that (IFTTT) logic in smart contracts and applications, available for Bitcoin, Stacks and Ordinals.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">
              Instill confidence in transactions with Bitcoin finality.
            </h3>
            <div className="mb-8 h-48 flex items-center justify-center">
              <Search className="h-24 w-24" />
            </div>
            <p className="text-gray-600">
              The <span className="font-medium">Stacks Explorer</span> enables users to quickly identify the Bitcoin block where a Stacks transaction was settled, enabling confidence in the security and longevity of assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};