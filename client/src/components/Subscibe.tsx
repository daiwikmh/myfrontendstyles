import { useEffect } from 'react';
import { Button } from './ui/button';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import { Loader2, CheckCircle2, ExternalLink } from 'lucide-react';

// Contract configuration
const CONTRACT_ADDRESS = '0x792Fa6Dc23A4B0935574F326f8328Cc4FbA025a9';


// ABI for FeeSystem contract
const ABI = [
  {
    name: 'payFee',
    type: 'function',
    stateMutability: 'payable',
    inputs: [],
    outputs: [],
  },
  {
    name: 'hasAccess',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'user', type: 'address' }],
    outputs: [{ name: '', type: 'bool' }],
  },
];

interface SubscribeProps {
  onSubscriptionSuccess?: () => void;
}

const Subscribe = ({ onSubscriptionSuccess }: SubscribeProps) => {
  const { address, isConnected } = useAccount();
  const { writeContract, isPending, isSuccess, data: txHash } = useWriteContract();
  
  // Read if the user has already paid
  const { data: hasAccess } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: 'hasAccess',
    args: [address || '0x0000000000000000000000000000000000000000'],
  });

  // Call the success callback when transaction is successful
  useEffect(() => {
    if (isSuccess && onSubscriptionSuccess) {
      onSubscriptionSuccess();
    }
  }, [isSuccess, onSubscriptionSuccess]);

  const onSignAndSubmitTransaction = () => {
    if (!isConnected || !address) {
      alert('Please connect your wallet first!');
      return;
    }

    writeContract({
      address: CONTRACT_ADDRESS,
      abi: ABI,
      functionName: 'payFee',
      value: BigInt(0.1 * 10 ** 16), // 0.01 ETH in wei
    });
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Join Our Ecosystem</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Subscribe to unlock exclusive features and become part of our growing community. 
        Your subscription helps support the development of new features and improvements.
      </p>
      
      <div className="flex flex-col items-center gap-6">
        <Button 
          onClick={onSignAndSubmitTransaction}
          disabled={isPending || isSuccess || (hasAccess === true)}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 min-w-[250px]"
        >
          {!isConnected ? (
            "Connect Wallet"
          ) : isPending ? (
            <div className="flex items-center gap-2">
              <Loader2 className="animate-spin h-5 w-5" />
              <span>Processing...</span>
            </div>
          ) : isSuccess || hasAccess ? (
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Subscribed!</span>
            </div>
          ) : (
            "Subscribe Now"
          )}
        </Button>
        
        {isSuccess && txHash && (
          <div className="flex flex-col items-center gap-4 p-6 bg-green-50 rounded-xl w-full max-w-md">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle2 className="h-6 w-6" />
              <span className="font-semibold">Transaction Successful!</span>
            </div>
            <p className="text-green-700">
              Your subscription is now active. You can now access all features.
            </p>
            {txHash && (
              <a 
                href={`https://explorer.linea.build/tx/${txHash}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>View on Explorer</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Subscribe;