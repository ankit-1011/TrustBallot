import { Label } from "@/components/ui/8bit/label"
import { Button } from "@/components/ui/8bit/button"
import { Card, CardContent, CardHeader} from "@/components/ui/8bit/card"
import { Input } from "@/components/ui/8bit/input"
import { useNavigate } from "react-router-dom"


const Login = () => {
const navigate = useNavigate()

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-md">
                <CardHeader className="flex justify-center items-center">
                    <Label>Create Account</Label>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex justify-center items-center gap-4">
                        <Label className="w-3xs">Email</Label>
                        <Input type="Email" placeholder="Enter Your Email" required />
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <Label className="w-3xs">Password</Label>
                        <Input type="password" placeholder="Enter Your Password" required />
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <Button onClick={()=>{navigate('/menu')}}>Login</Button>
                        <Button onClick={()=>navigate('/signup')}>Sign-Up</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login
