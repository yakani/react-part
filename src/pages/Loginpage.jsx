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
    try {
      const  res = await insert(data);
      console.log(res);
      toast.success('good');
      navigate(type=='user' ? '/shop' : '/deliver/'+res);
    } catch (error) {
      toast.error(error);
    }
    
  };
  return (
    <>
    <Helmet>
      <link rel='stylesheet' href='/login.css'/>
    </Helmet>
    <ToastContainer/>
    	<form  className="container login" >

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
{type=='user' ? <><button className="a google" id="google" onClick={LoginGoogle}>GOOGLE SINGIN</button></> : <></>}
<div><a href="/register">register here</a></div>
<div><a href={type=='user' ? '/deliver/login':'/login'}>{type=='user' ? 'login as deliver':'login as user'} </a></div>
<div><a href="/admin/login">login as admin</a></div>


</form>
    </>
  )
}

export default Loginpage
