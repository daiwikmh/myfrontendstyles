import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "./ui/dropdown-menu"
import { WalletIcon, LogOut, Loader2 } from "lucide-react"
import { useAccount, useDisconnect } from "wagmi";
import { Button } from "./ui/button"

import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function MainNav() {
    const { address, connector, isConnecting } = useAccount();
    const { disconnect } = useDisconnect();

    const formatAddress = (addr: string) => {
        if (!addr) return "";
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    };

    const handleCopyAddress = async (address: string) => {
        try {
            await navigator.clipboard.writeText(address);
            toast.success("Address copied to clipboard", {
                className: "font-medium",
            });
        } catch (error) {
            console.error("Failed to copy address:", error);
            toast.error("Failed to copy address", {
                className: "font-medium",
            });
        }
    };

    return (
        <nav className="flex justify-between w-full px-4 py-4 z-50">
            <div className="flex items-center space-x-6">
                {/* Navigation items would go here */}
            </div>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        size="lg"
                        className={cn(
                            "relative overflow-hidden transition-all duration-300",
                            "bg-gradient-to-r from-zinc-900 to-black hover:from-black hover:to-zinc-900",
                            "text-white shadow-lg hover:shadow-xl",
                            "flex items-center gap-2.5 px-6 py-2.5 rounded-xl border-2",
                            "border-black",
                            "font-montserrat tracking-wide",
                            isConnecting && "cursor-not-allowed opacity-80"
                        )}
                    >
                        {isConnecting ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                            <WalletIcon className="h-4 w-4" />
                        )}
                        <span className="font-semibold">
                            {isConnecting ? "CONNECTING..." : "WALLETS"}
                        </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                    className={cn(
                        "w-[380px] p-6 rounded-2xl",
                        "bg-white/95 backdrop-blur-lg",
                        "border-2 border-black",
                        "shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)]"
                    )} 
                    align="end" 
                    sideOffset={5}
                >
                    <div className="mb-6 space-y-4">
                        <h3 className="font-bold text-black font-montserrat tracking-wide">
                            CONNECTED WALLETS
                        </h3>
                        {connector && address && (
                            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-100">
                                <div className="space-y-1">
                                    <p className="font-medium text-sm text-zinc-900">
                                        {connector.name}
                                    </p>
                                    <p className="text-xs font-mono text-zinc-500">
                                        {formatAddress(address)}
                                    </p>
                                </div>
                                <Button
                                    variant="ghost" 
                                    size="sm"
                                    className="h-8 px-3 text-xs cursor-pointer"
                                    onClick={() => handleCopyAddress(address)}
                                >
                                    Copy
                                </Button>
                            </div>
                        )}
                    </div>


                    <DropdownMenuSeparator className="my-4 opacity-50" />

                    <div className="space-y-3">
                        <DropdownMenuItem onClick={() => disconnect()} className="p-0 focus:bg-transparent">
                            <Button 
                                variant="outline" 
                                className={cn(
                                    "w-full h-11 rounded-xl transition-all duration-300",
                                    "border-2 border-red-500 bg-red-500 text-white",
                                    "hover:bg-white hover:text-red-500",
                                    "font-montserrat tracking-wide"
                                )}
                            >
                                <LogOut className="h-4 w-4 mr-2" />
                                Disconnect
                            </Button>
                        </DropdownMenuItem>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    )
}