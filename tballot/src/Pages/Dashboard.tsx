import { ChartExample } from '@/components/ui/8bit/blocks/chart'
import WalletConnect from './WalletConnect'
import { useAccount } from 'wagmi'

const Dashboard = () => {
const {isConnected} = useAccount()

  return (
    <div>
      {!isConnected ? (<WalletConnect/>):(
        <div className="w-[500px] ml-50 mt-10 bg-fuchsia-100">
          <ChartExample />
        </div>
      )}
    </div>
  )
}

export default Dashboard