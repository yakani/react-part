import React from 'react'
import { Helmet } from 'react-helmet'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Loginpage = ({insert,type,Google}) => {
  const navigate = useNavigate();
  const [email,setemail] = useState();
  const [password,setpassword] = useState();
  const LoginGoogle = async (e)=>{
    e.preventDefault();
    try {
      Google();
    } catch (error) {
      toast.error(error);
    }
    navigate('/shop');
  }
  
  const loginuser = async (e)=>{
    e.preventDefault();
    if(!email ||!password)return toast.error('filled all the box');
    if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))return toast.error('invalid email');
    const data = {
      email,
      password
    };
    const api =" https://backend-iota-three-50.vercel.app/api/v2";
    const url = (type == "user") ? "/user/auth": "/deliver/login";
    const IdemUP = async (params)=>{
      const res = await fetch(api+url, {
         method: 'POST',
        credentials: "include",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(params)
      });
    }
    try {
       IdemUP(data);
      toast.success('good');
       navigate(type == "user" ? '/shop':'/deliver');
    } catch (error) {
      toast.error(error.msg);
    }
    
  };
  return (
    <>
    <Helmet>
      <link rel='stylesheet' href='/login.css'/>
    </Helmet>
    <video
            src='/photos/nashmood.mp4'
           className='videofixed'
            controls
            autoPlay
            muted
            loop
        />
    <ToastContainer/>
    	<form  className=" login" >
        <div className='btn-container'> 
      <img src="/photos/logo.jpg" className='w-200 ' alt="" />
          <h2 className='text-3xs text-center font-pregular text-gray-700 '>SignIn</h2>
          
        </div>
<div className="container">

<div>    
<label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
                >Email:</label
              >
    <input type="email"  name="email" placeholder="Enter your e-mail  " value={email} id="email" onChange={(e)=>setemail(e.target.value)}  />
 </div>  
<div>
<label
                htmlFor="pwd2"
                className="block text-gray-700 font-bold mb-2"
                >Password:</label
              >
<input type="password" name="pwd2" placeholder="enter  password" value={password} id="password" onChange={(e)=>setpassword(e.target.value)} />

</div>
<div> <input type="submit" name="submit" id="login" className="a" onClick={loginuser} /> </div>
</div>
<div className='btn-container'>
{type=='user' ? <><button className="text-lg text-gray-300 font-pregular text-center w-200" onClick={LoginGoogle}>SignIn with Google</button></> : <></>}
<p className='text-lg text-gray-300 font-pregular text-center text-decoration-none'>Don't have an account? </p><a href="/register">SignUp</a>
<a className='text-lg text-gray-300 font-pregular text-center text-decoration-none' href={type=='user' ? '/deliver/login':'/login'}>{type=='user' ? 'SignIn as deliver':'SignIn as user'} </a>
<a className='text-lg text-gray-300 font-pregular text-center text-decoration-none' href="/admin/login">SignIn as admin</a></div>


</form>
    </>
  )
}

export default Loginpage
