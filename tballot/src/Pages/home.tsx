import { Button } from "@/components/ui/8bit/button";
import logo from "../assets/logo.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import etherium from "../assets/etherium.png";


const Home = () => {
    const navigate = useNavigate();

    const words = ["Democracy", "Ownership", "Privacy"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen w-full bg-black relative">
            <div className="relative z-10 w-15 h-3 ml-5 ">
                <img src={etherium} className="ml-9" /><h2 className="press-start-2p-regular text-white text-[15px]" >&nbsp;Ethereum Blockchain</h2>
            </div>

            {/* Background */}
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    background: "#000000",
                    backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)`,
                    backgroundSize: "30px 30px",
                    backgroundPosition: "0 0",
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="press-start-2p-regular text-7xl font-bold inline-flex items-center gap-2 text-white"
                    >
                        TrustBallot
                        <motion.img
                            src={logo}
                            alt="TrustBallot"
                            className="w-30 h-30"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        />
                    </motion.h1>

                    <div className="press-start-2p-regular text-3xl font-bold text-white mt-6 text-center flex gap-2">
                        Decentralized{" "}
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={words[index]}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-blue-400"
                            >
                                {words[index]}
                            </motion.span>
                        </AnimatePresence>
                        For Everyone!
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-10"
                >
                    <Button variant="outline" onClick={() => navigate("./login")} className="cursor-pointer">Let's Get Started</Button>
                </motion.div>
            </div>



            {/* Footer buttons */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="flex flex-row gap-10 m-6 bottom-4 w-full z-10"
            >

                <div>
                    <Button
                        variant="outline"
                        onClick={() =>
                            window.open("https://github.com/ankit-1011", "_blank", "noopener,noreferrer")
                        }
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        Github
                        <img src={github} alt="Github" className="w-6 h-6" />
                    </Button>
                </div>

                <div>
                    <Button
                        variant="outline"
                        onClick={() =>
                            window.open("https://x.com/AnRekt_1101", "_blank", "noopener,noreferrer")
                        }
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        Twitter
                        <img src={twitter} alt="Twitter" className="w-6 h-6" />
                    </Button>
                </div>
                <div className="relative text-right left-[21%]">
                    <h2 className="press-start-2p-regular text-white text-[15px]">2025@TrustBallot all right reserved</h2>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
