import { Card } from "@/components/ui/8bit/card";
import { Button } from "@/components/ui/8bit/button";
import { Home, User, List } from "lucide-react";
import { Separator } from "@/components/ui/8bit/separator";
import { Avatar ,AvatarImage,AvatarFallback} from "@/components/ui/8bit/avatar";

export default function Menu() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Card className="w-64 bg-white border-r border-gray-300 flex flex-col ">
                <div className="flex justify-center text-2xl font-bold border-b border-gray-300 ">
                    Menu
                </div>
                <nav className="flex-1 p-4 space-y-3 ">
                    <Button variant="ghost" className="w-full justify-start gap-3">
                        <Home size={18} /> Dashboard
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3">
                        <User size={18} /> Candidate List
                    </Button>
                    <Button variant="ghost" className="w-full justify-start gap-3">
                        <List size={18} /> Voter List
                    </Button>
                </nav>
                <div className="p-4 border-t border-gray-300">
                    <Button className="w-full" variant="destructive">
                        Logout
                    </Button>
                </div>
            </Card>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <div className="flex justify-between ">
                    <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
                    <div className="flex items-center gap-3">
                        <Avatar>
                        <AvatarImage src="https://8bitcn.com/images/pixelized-8bitcnorc.jpg" alt="@8bitcn" />
                    </Avatar>
                    <div><p>ankitkrmishra119@gmail.com</p></div>
                    </div>
                </div>
                <Separator/>
            </div>
        </div>
    );
}
