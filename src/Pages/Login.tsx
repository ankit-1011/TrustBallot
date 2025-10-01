import { Label } from "@/components/ui/8bit/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"


const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-md">
                <CardHeader className="flex justify-center items-center">
                    <Label>Create Account</Label>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex justify-center items-center ">
                    <Label className="w-2xs">FullName</Label>
                    <Input type="text" placeholder="Enter YourFull Name" required />
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <Label className="w-3xs">Email</Label>
                        <Input type="Email" placeholder="Enter Your Email" required />
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <Label className="w-3xs">Password</Label>
                        <Input type="password" placeholder="Enter Your Password" required />
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <Button>Login</Button>
                        <Button>Register</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login
