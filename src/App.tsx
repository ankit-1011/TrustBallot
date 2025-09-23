import { Button } from "@/components/ui/8bit/button"
import logo from "./assets/logo.png"
import github from './assets/github.png'
import twitter from './assets/twitter.png'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black relative">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
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
          <h1 className="press-start-2p-regular text-3xl font-bold flex-row text-white">Decentralized Democracy For Everyone!</h1><br />
        </div>
        <Button variant="outline">Let's Get Started</Button>
      </div>
      <div className="flex flex-row gap-80 justify-center items-center absolute bottom-8 w-full z-10">
        <div>
        <Button variant="outline" onClick={() => window.open('https://github.com/ankit-1011', '_blank', 'noopener,noreferrer')} className="flex items-center gap-2">
          Github
          <img src={github} alt="Github" className="w-6 h-6" />
        </Button>

        </div>
        <div>
          <Button variant="outline" onClick={() => window.open('https://x.com/AnRekt_1101', '_blank', 'noopener,noreferrer')}>Twitter<img src={twitter} alt="Twitter" className="w-6 h-6" /></Button>
        </div>
      </div>

    </div>
  )
}

export default App



