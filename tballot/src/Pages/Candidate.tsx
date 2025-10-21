
import { Card, CardHeader, CardTitle ,CardContent } from '@/components/ui/8bit/card'
import WalletConnect from './WalletConnect'
import { useAccount } from 'wagmi'
import { Button } from '@/components/ui/8bit/button'
import { toast } from '@/components/ui/8bit/toast'

const Candidate = () => {
 const {isConnected} = useAccount()

  return (
    <div className='w-full flex justify-center items-center mt-20'>
      {!isConnected ? (<WalletConnect/>):(
        <Card className='w-[596px]  shadow-lg-blue '>
                  <CardHeader className='text-center'>
                    <CardTitle>Candidate Registration</CardTitle>
                  </CardHeader>

                   <CardContent>
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                            <div className="flex flex-row items-center gap-4">
                                <label className="text-sm font-bold text-gray-700 w-34">
                                    Full Name:
                                </label>
                                <input
                                    type="text"
                                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your Name"
                                />
                            </div>

                             <div className="flex flex-row items-center gap-4">
                                <label className="text-sm font-bold text-gray-700 w-34">
                                    Wallet Address:
                                </label>
                                <input
                                    type="text"
                                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your Address"
                                />
                            </div>

                             <div className="flex flex-row items-center gap-4">
                                <input
                                    type="file"
                                    className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex justify-center">
                                <Button
                                    type="submit"
                                    variant="default"
                                    className="p-6 bg-lime-600 text-white font-semibold rounded hover:bg-lime-700 transition duration-200"
                                    onClick={() => { toast("Registered Successfully"); }}
                                >
                                    Register
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
      )}
    </div>
  )
}

export default Candidate