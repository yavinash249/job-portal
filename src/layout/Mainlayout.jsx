import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { ToastContainer } from "react-toastify"


const Mainlayout =()=> {
  return (
    <>
       <Navbar/>  
       <Outlet/>
       <ToastContainer/>
    </>
  )
}

export default Mainlayout
