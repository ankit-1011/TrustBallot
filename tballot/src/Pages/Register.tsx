import {
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    Card,
} from "@/components/ui/8bit/card";
import { Button } from "@/components/ui/8bit/button";
import { toast } from "@/components/ui/8bit/toast";
import { Navigate } from "react-router-dom";
import WalletConnect from "./WalletConnect";
import { useAccount } from "wagmi";

const Register = () => {
  const {isConnected} = useAccount()

    return (
        <div className="flex  items-center justify-center bg-gray-100 mt-20">
            {!isConnected ? (<WalletConnect />) : (
                <Card className="w-[550px] shadow-lg-blue">
                    <CardHeader className="text-center">
                        <CardTitle>Registration Form</CardTitle>
                        <CardDescription className="text-center mt-2">
                            Let's get Onchain!
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                            <div className="flex flex-row items-center gap-4">
                                <label className="text-sm font-bold text-gray-700 w-34">
                                    Email ID:
                                </label>
                                <input
                                    type="email"
                                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your Email"
                                />
                            </div>

                            <div className="flex justify-center">
                                <Button
                                    type="submit"
                                    variant="default"
                                    className="p-6 bg-lime-600 text-white font-semibold rounded hover:bg-lime-700 transition duration-200"
                                    onClick={() => { toast("Registered Successfully"); }}
                                >
                                    Register
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default Register;