import { toast } from "sonner";
import { Button } from "./ui/button";
import { useNavigate } from "react-router";
import { useAccount, useConnect, useAccountEffect } from "wagmi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Wallet2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Login() {
    const navigate = useNavigate();
    const { isConnected } = useAccount();
    const { connectors, connect, isPending } = useConnect();

    useAccountEffect({
        onConnect() {
            toast.success("Connected successfully!");
            navigate("/profile");
        },
    });

    if (isConnected) return null;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    size="lg"
                    className={cn(
                        "relative overflow-hidden transition-all duration-300",
                        "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600",
                        "dark:from-indigo-600 dark:to-purple-600 dark:hover:from-indigo-500 dark:hover:to-purple-500",
                        "text-white border-0 shadow-lg hover:shadow-xl",
                        "flex items-center gap-2 px-6 py-2.5 rounded-full",
                        isPending && "cursor-not-allowed opacity-80"
                    )}
                >
                    {isPending ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <Wallet2 className="w-5 h-5" />
                    )}
                    <span className="font-medium">
                        {isPending ? "Connecting..." : "Connect Wallet"}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="w-[240px] p-2 backdrop-blur-lg bg-white/95 dark:bg-zinc-950/95 border border-zinc-200/50 dark:border-zinc-800/50 shadow-xl"
            >
                {connectors.map((connector, index) => (
                    <>
                        <DropdownMenuItem
                            key={connector.uid}
                            onClick={() => connect({ connector })}
                            className={cn(
                                "flex items-center px-3 py-2.5 rounded-lg cursor-pointer transition-colors",
                                "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                                "focus:bg-zinc-100 dark:focus:bg-zinc-800/50",
                                isPending && "opacity-50 cursor-not-allowed"
                            )}
                            disabled={isPending}
                        >
                            <div className="flex flex-col">
                                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                    {connector.name}
                                </span>
                                <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                    Connect using {connector.name} wallet
                                </span>
                            </div>
                        </DropdownMenuItem>
                        {index < connectors.length - 1 && (
                            <DropdownMenuSeparator className="my-1 opacity-50" />
                        )}
                    </>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
};