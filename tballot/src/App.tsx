import { Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Menu from "./Pages/Menu"
import Register from "./Pages/Register"
import { Toaster } from "sonner"
import Cursor from "./Pages/cursor"
import Dashboard from "./Pages/Dashboard"
import Candidate from "./Pages/Candidate"
import Voter from "./Pages/Voter"
import "@rainbow-me/rainbowkit/styles.css";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider ,darkTheme } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {config } from "../WalletConfig";


const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider chains={config.chains} theme={darkTheme()}>
            <Cursor />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/menu" element={<Menu />} />
              <Route element={<Menu />}>
                <Route path="/register" element={<Register />} />
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route path={"/candidate-list"} element={<Candidate />} />
                <Route path={"/voter-list"} element={<Voter />} />
              </Route>
            </Routes>
            <Toaster position="top-right" richColors closeButton />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App