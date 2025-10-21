import React from 'react'
import WalletConnect from './WalletConnect'
import { useAccount } from 'wagmi'

const Voter = () => {
  const {isConnected} = useAccount()
  
    return (
      <div>
        {!isConnected ? (<WalletConnect/>):("dashboard")}
      </div>
    )
}

export default Voter