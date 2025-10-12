import { Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Menu from "./Pages/Menu"
import Register from "./Pages/Register"
import { Toaster } from "sonner"
import Cursor from "./Pages/cursor"



const App = () => {
  return (  
   <>
   <Cursor/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/menu" element={<Menu/>}/>
    <Route path="/register" element={<Register/>}/>
   </Routes>
   <Toaster position="top-right" richColors closeButton />
   </>
  )
}

export default App