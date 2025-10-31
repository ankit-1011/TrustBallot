import { Label } from "@/components/ui/8bit/label"
import { Button } from "@/components/ui/8bit/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/8bit/card"
import { Input } from "@/components/ui/8bit/input"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { toast } from "@/components/ui/8bit/toast"
import { useNavigate } from "react-router-dom"
import { ScatterBoxLoader } from "react-awesome-loaders";
import bg from "../assets/background.jpg"; // <-- add this import


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


    const [Loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3000/signup', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })

            const data = await res.json();

            if (res.ok) {
                toast(data.message || "Sign Up Successful");
                setFormData({ name: "", email: "", password: "" })
                setTimeout(() => {
                    setLoading(false);
                    navigate("/menu");
                }
                    , 10000)
            }
        } catch (err) {

            console.error(err);
            setFormData({ name: "", email: "", password: "" })
            toast("Error during sign up");
            setLoading(false);
        }
    }

    return (
        <div className="flex justify-center items-center h-screen" style={{ backgroundImage: `url(${bg})`}}>
            {Loading ? <div className="flex justify-center items-center h-40 ">
                <ScatterBoxLoader
                    primaryColor={"#6366F1"}
                    secondaryColor={"#E0E7FF"}
                />
            </div> : <Card className="w-[490px] ">
                <CardHeader>
                    <Label className="text-2xl font-semibold flex justify-center items-center">
                        Sign Up
                    </Label>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="flex justify-center items-center">
                            <Label className="w-2xs font-bold">FullName</Label>
                            <Input
                                name="name"
                                type="text"
                                placeholder="Enter ur FullName"
                                required
                                onChange={handleChange}
                                className="w-[450px]"
                            />
                        </div>

                        <div className="flex justify-center items-center gap-4 m-4">
                            <Label className="w-3xs font-bold">Email</Label>
                            <Input
                                name="email"
                                type="email"
                                placeholder="Enter ur Email"
                                required
                                onChange={handleChange}
                                className="w-[450px]"
                            />
                        </div>

                        <div className="flex justify-center items-center gap-4">
                            <Label className="w-3xs font-bold">Password</Label>
                            <Input
                                name="password"
                                type="password"
                                placeholder="Enter ur Password"
                                required
                                onChange={handleChange}
                                className="w-[450px]"
                            />
                        </div>

                        <CardFooter className="flex justify-center items-center">
                            <Button type="submit">Sign Up</Button>
                        </CardFooter>
                    </form>
                </CardContent>
            </Card>}

        </div>

    )
}

export default SignUp