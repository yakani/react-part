import React from 'react'
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import Botton from '../component/botton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Headre from '../component/Headre';
import Accountpage from '../pages/Accountpage';
const Mainlayout = ({ishomer,data}) => {

  return (
    <>
   
    <Headre />
    <Navbar ishome={ishomer} />
    <ToastContainer/>
     <Accountpage ishome={ishomer} userdata={data} />
    <Outlet/>
    <Botton/> 


    </>
  )
}

export default Mainlayout
