import React from 'react'

import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const Logout = ({logoutuser}) => {
    const navigate = useNavigate();
    useEffect(()=>{
         const userout = ()=>{
        logoutuser();
        toast.success('logout');
        navigate('/login');
    };
    userout();
   
    },[])
 
  return<>
  <h1>Loading....</h1>
  </> ;
}

export default Logout
