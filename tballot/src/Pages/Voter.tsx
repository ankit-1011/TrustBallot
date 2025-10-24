import React from 'react'
import WalletConnect from './WalletConnect'
import { useAccount } from 'wagmi'
import { Copy } from 'lucide-react'

const Voter = () => {
  const { isConnected } = useAccount()

  return (
    <div>
      {!isConnected ? (<WalletConnect />) : (
        <div className="">
          <div className="w-64 h-28 rounded-lg border-2 border-black p-3 m-20 border-r-8 border-b-8 hover:-translate-y-1 duration-200 ">
            <div className="border-2 border-black w-55 h-10 p-2 rounded-sm press-start-2p-regular">
              mail
            </div>
            <div className="flex m-2.5 gap-2">
              <div className="border-2 w-29 h-8 p-1 flex border-black rounded-sm  press-start-2p-regular border-r-5 border-b-5 cursor-pointer active:bg-blue-400 transition-colors duration-200 "><Copy />copy</div>
              <div className="border-2 w-30 h-8 p-1 border-black rounded-sm   press-start-2p-regular border-r-5 border-b-5 cursor-pointer active:bg-green-500 transition-colors duration-200">verify</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Voter