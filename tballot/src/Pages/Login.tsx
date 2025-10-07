import { Label } from "@/components/ui/8bit/label"
import { Button } from "@/components/ui/8bit/button"
import { Card, CardContent, CardHeader } from "@/components/ui/8bit/card"
import { Input } from "@/components/ui/8bit/input"
import { useNavigate } from "react-router-dom"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { toast } from "@/components/ui/8bit/toast"
import { ScatterBoxLoader } from "react-awesome-loaders"

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
                toast(data.message || "Login Successful");
                setFormData({ email: "", password: "" })
                setTimeout(() => {
                    setLoading(false);
                    navigate("/menu");
                }, 10000)
            }else{
                setLoading(false);
                toast( "Login Failed ⚠️");
                setFormData({ email: "", password: "" })
            }
        }catch(err){
            setLoading(false);
            toast("Server not responding ⚠️");
            setFormData({ email: "", password: "" })
            console.error(err);
        }}


    return (
            <div className="flex justify-center items-center h-screen">
                 {Loading ? <div className="flex justify-center items-center h-40 ">
                                 <ScatterBoxLoader
                                     primaryColor={"#6366F1"}
                                     secondaryColor={"#E0E7FF"}
                                 />
                             </div>:    
                  <Card className="w-full max-w-md">
                    <CardHeader className="flex justify-center items-center">
                        <Label>Create Account</Label>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="flex justify-center items-center gap-4">
                                <Label className="w-3xs">Email</Label>
                                <Input name="email" type="email" placeholder="Enter Your Email" required value={formData.email} onChange={handleChange} />
                            </div>

                            <div className="flex justify-center items-center gap-4">
                                <Label className="w-3xs">Password</Label>
                                <Input name="password" type="password" placeholder="Enter Your Password" required value={formData.password} onChange={handleChange}/>
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
