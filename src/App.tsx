import { Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Menu from "./Pages/Menu"


const App = () => {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/menu" element={<Menu/>}/>
   </Routes>
   
   </>
  )
}

export default App