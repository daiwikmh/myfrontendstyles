import {
    LayoutDashboard,
    ArrowLeftRight,
    UserCircle,
    Wallet,
    LogOut,
} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "./ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { useSidebar } from "./ui/sidebar";
import { useDisconnect } from "wagmi";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/profile" },
    { icon: ArrowLeftRight, label: "Agent", href: "/agent" },
    { icon: ArrowLeftRight, label: "Trading", href: "/trading" },
];

export function AppSidebar() {
    const { state } = useSidebar();
    const { disconnect } = useDisconnect()


    return (
        <Sidebar
            collapsible="icon"
            className="border-r border-gray-200 z-50 fixed h-screen bg-white/80 backdrop-blur-sm"
        >
            <SidebarHeader className="border-b border-gray-200 px-3 py-5">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild size="lg">
                            <Link to="/" className="flex items-center gap-3 group">
                                <div className={`flex ${state === "collapsed" ? "h-9 w-9" : "h-10 w-10"} items-center justify-center rounded-xl bg-black shadow-lg shadow-black/10 group-hover:scale-105 transition-all`}>
                                    <Wallet className={`${state === "collapsed" ? "h-4 w-4" : "h-5 w-5"} text-white`} />
                                </div>
                                <span className="font-bold text-xl text-gray-900 font-montserrat tracking-tight">Quantum</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="py-6">
                <SidebarMenu>
                    {sidebarItems.map((item) => (
                        <SidebarMenuItem key={item.label}>
                            <SidebarMenuButton asChild tooltip={item.label}>
                                <Link to={item.href}>
                                    <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-gray-100/80 transition-all group">
                                        <item.icon className="h-5 w-5 text-gray-700 group-hover:text-black transition-colors" />
                                        <span className="font-montserrat font-medium text-gray-700 group-hover:text-black transition-colors">{item.label.toUpperCase()}</span>
                                    </div>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>

            <SidebarRail />
        </Sidebar>
    )
}