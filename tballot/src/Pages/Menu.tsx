import { Card } from "@/components/ui/8bit/card";
import { Button } from "@/components/ui/8bit/button";
import { Home, User, List, Boxes } from "lucide-react";
import { Separator } from "@/components/ui/8bit/separator";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/8bit/toast";


export default function Menu() {
    let Navigate = useNavigate();

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Card className="w-66 bg-white border-r border-gray-300 flex flex-col ">
                <div className="flex justify-center text-2xl font-bold border-b border-gray-300 ">
                    Menu
                </div>
                <nav className="flex-1  space-y-3 ">
                    <Button variant="ghost" className="w-full justify-start gap-3 " onClick={() => Navigate("/dashboard")}>
                        <Home size={32} /> Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => Navigate("/candidate-list")}>
                        <User size={42} /> Candidate List
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => Navigate("/voter-list")}>
                        <List size={18} /> Voter List
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => Navigate("/register")}>
                        <Boxes />Register
                    </Button>
                </nav>
                <div className="p-6 border-t border-gray-300 ">
                    <Button className="w-full p-7 cursor-pointer" variant="destructive" onClick={() => { toast("You Logout!"); Navigate("/") }}>
                        Logout
                    </Button>
                </div>
            </Card>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <div className="flex justify-between ">
                    <h1 className=" font-bold press-start-2p-regular">ankitkrmishra119@gmail.com</h1>
                    <div className="flex items-center gap-3">
                        <div>
                            <Button className="press-start-2p-regular p-5 bg-purple-500 hover:bg-purple-600 text-white mb-3 cursor-pointer"  >
                                connect wallet
                            </Button>

                        </div>
                    </div>
                </div>
                <Separator />
                <Outlet/>
            </div>
        </div>
    );
}
