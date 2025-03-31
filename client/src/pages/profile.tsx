import { useState } from "react";
import { NetworkKey } from "../lib/fetchWalletBalance";
import { NetworkSelector } from "../components/NetworSelector";
import { EmptyWalletState } from "../components/wallets/EmptyWalletState";
import { useAccount } from "wagmi";

function App() {
    const [selectedNetwork, setSelectedNetwork] = useState<NetworkKey>('sepolia');
    const {isConnected} = useAccount();

    return (
        <div className="min-h-screen bg-[#f8fafc]">
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
                        Your Wallet Dashboard
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Manage and monitor your connected wallets across different networks
                    </p>
                </div>

                <div className="mb-8 flex justify-center">
                    <NetworkSelector
                        selectedNetwork={selectedNetwork}
                        setSelectedNetwork={setSelectedNetwork}
                    />
                </div>

                <div className="space-y-4">
                    {isConnected ? (
                        <>
                            
                        </>
                    ) : (
                        <EmptyWalletState />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;