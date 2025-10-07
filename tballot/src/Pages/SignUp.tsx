import { Label } from "@/components/ui/8bit/label"
import { Button } from "@/components/ui/8bit/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/8bit/card"
import { Input } from "@/components/ui/8bit/input"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { toast } from "@/components/ui/8bit/toast"
import { useNavigate } from "react-router-dom"


interface SignUpForm {
    name: String,
    email: String,
    password: String
}

const SignUp = () => {
let navigate = useNavigate();


    const [formData, setFormData] = useState<SignUpForm>({
        name: "",
        email: "",
        password: ""
    })


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3000/signup', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            const data = await res.json();

            if(res.ok){
                 toast(data.message || "Sign Up Successful");
                setFormData({name:"",email:"",password:""})
                setTimeout(()=>{
                   navigate("/login");
                }
                ,1500)
            }
        } catch (err) {
            console.error(err);
            setFormData({name:"",email:"",password:""})
            toast("Error during sign up");
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <Label className="text-2xl font-semibold flex justify-center items-center">Sign Up</Label>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex justify-center items-center ">
                            <Label className="w-2xs">FullName</Label>
                            <Input name="name" type="text" placeholder="Enter YourFull Name" required onChange={handleChange} />
                        </div>

                        <div className="flex justify-center items-center gap-4 m-4">
                            <Label className="w-3xs">Email</Label>
                            <Input name="email" type="Email" placeholder="Enter Your Email" required onChange={handleChange} />
                        </div>

                        <div className="flex justify-center items-center gap-4">
                            <Label className="w-3xs">Password</Label>
                            <Input name="password" type="password" placeholder="Enter Your Password" required onChange={handleChange} />
                        </div>

                        <CardFooter className="flex justify-center items-center">
                            <Button type="submit">Sign Up</Button>
                        </CardFooter>
                    </form>
                </CardContent>


            </Card>
        </div>
    )
}

export default SignUp