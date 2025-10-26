import { Label } from "@/components/ui/8bit/label"
import { Button } from "@/components/ui/8bit/button"
import { Card, CardContent, CardHeader } from "@/components/ui/8bit/card"
import { Input } from "@/components/ui/8bit/input"
import { useNavigate } from "react-router-dom"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { toast } from "@/components/ui/8bit/toast"
import { ScatterBoxLoader } from "react-awesome-loaders"
import bg from "../assets/background.jpg";

interface LoginForm {
    email: string,
    password: string
}


const Login = () => {
    const [Loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const [formData, setFormData] = useState<LoginForm>({
        email: "",
        password: ""
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3000/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            const data = await res.json();
            if (res.ok) {
                toast(data.message || "Login Successful ");
                localStorage.setItem("userEmail",formData.email)
                setFormData({ email: "", password: "" })
                
                    setLoading(false);
                    navigate("/menu",{state:{email:formData.email}});
               
            } else {
                setLoading(false);
                toast("Login Failed ⚠️");
                setFormData({ email: "", password: "" })
            }
        } catch (err) {
            setLoading(false);
            toast("Server not responding ⚠️");
            setFormData({ email: "", password: "" })
            console.error(err);
        }
    }


    return (
        <div className="flex justify-center items-center h-screen " style={{backgroundImage:`url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {Loading ? <div className="flex justify-center items-center h-40 ">
                <ScatterBoxLoader
                    primaryColor={"#6366F1"}
                    secondaryColor={"#E0E7FF"}
                />
            </div> :
                <Card className="w-full max-w-md">
                    <CardHeader className="flex justify-center items-center">
                        <Label className="font-bold text-[20px]">Create Account</Label>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex justify-center items-center gap-4">
                                <Label className="w-3xs font-bold">Email</Label>
                                <Input name="email" type="email" placeholder="enter ur email" required value={formData.email} onChange={handleChange}  className="w-[450px]"/>
                            </div>

                            <div className="flex justify-center items-center gap-4">
                                <Label className="w-3xs font-bold">Password</Label>
                                <Input name="password" type="password" placeholder="enter ur password" required value={formData.password} onChange={handleChange} className="w-[450px]"/>
                            </div>

                            <div className="flex justify-center items-center gap-4">
                                <Button type="submit">Login</Button>
                                <Button onClick={() => navigate('/signup')}>Sign-Up</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>}
        </div>
    )
}

export default Login
