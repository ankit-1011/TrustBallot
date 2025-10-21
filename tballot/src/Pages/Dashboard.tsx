import WalletConnect from './WalletConnect'
import { useAccount } from 'wagmi'

const Dashboard = () => {
const {isConnected} = useAccount()

  return (
    <div>
      {!isConnected ? (<WalletConnect/>):("dashboard")}
    </div>
  )
}

export default Dashboard