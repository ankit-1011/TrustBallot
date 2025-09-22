import { Button } from "@/components/ui/8bit/button"
import logo from "./assets/logo.png"

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)`,
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0",
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 className="press-start-2p-regular text-3xl font-bold inline-flex items-center gap-2 text-white">TrustBallot<img src={logo} alt='TrustBallot' className="w-20 h-20" /></h1>
          <h1 className="press-start-2p-regular text-3xl font-bold flex-row text-white">Decentralized Democracy For Everyone!</h1><br/>
        </div>
        <Button variant="outline">Let's Get Started</Button>
      </div>
    </div>
  )
}

export default App



