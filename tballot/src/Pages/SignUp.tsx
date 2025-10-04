import { Label } from "@/components/ui/8bit/label"
import { Button } from "@/components/ui/8bit/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/8bit/card"
import { Input } from "@/components/ui/8bit/input"
import { useNavigate } from "react-router-dom"


const SignUp = () => {
let Navigate = useNavigate()


  return (
    <div className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-md">
            <CardHeader>
               <Label className="text-2xl font-semibold flex justify-center items-center">Sign Up</Label>
            </CardHeader>
            <CardContent>
            <div className="flex justify-center items-center ">
                    <Label className="w-2xs">FullName</Label>
                    <Input type="text" placeholder="Enter YourFull Name" required />
                    </div>

                    <div className="flex justify-center items-center gap-4 m-4">
                        <Label className="w-3xs">Email</Label>
                        <Input type="Email" placeholder="Enter Your Email" required />
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <Label className="w-3xs">Password</Label>
                        <Input type="password" placeholder="Enter Your Password" required />
                    </div>
            </CardContent>

            <CardFooter className="flex justify-center items-center">
                <Button onClick={()=>Navigate("/menu")}>Sign Up</Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default SignUp