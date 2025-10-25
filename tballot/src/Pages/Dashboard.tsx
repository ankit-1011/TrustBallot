import { ChartExample } from '@/components/ui/8bit/blocks/chart'
import WalletConnect from './WalletConnect'
import { useAccount } from 'wagmi'
import { SquareArrowOutUpRight } from 'lucide-react'

const Dashboard = () => {
  const { isConnected } = useAccount()

  return (
    <div>
      {!isConnected ? (<WalletConnect />) : (
        <>
          <div className="w-[500px] ml-50 mt-10 m-10 bg-fuchsia-100">
            <ChartExample />
          </div>
          <div className="w-60 h-52 border-3 border-black rounded-lg border-r-8 border-b-8 hover:-translate-y-1 duration-200"><SquareArrowOutUpRight className='hover:translate-y-0.5 duration-100 cursor-pointer' />
            <div className="w-50 h-30 m-2  ml-4 border-2 border-black rounded-lg">
              <img src="https://8bitcn.com/images/pixelized-8bitcnorc.jpg" className="w-full h-full object-cover"
                alt="8bit image" />
            </div>
            <div className="w-18 h-8 ml-3 p-1 border-3 border-black border-r-5 border-b-5 rounded-sm press-start-2p-regular text-sm active:bg-violet-400 transition-colors duration-200 cursor-pointer">vote</div>
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard