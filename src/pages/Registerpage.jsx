import React from 'react'
import { Helmet } from 'react-helmet'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Registerpage = ({insert,type,admin=false,Google}) => {
  const navigate = useNavigate();
  const [value,setvalue] = useState('');
  const [name,setname] =useState();
  const [email,setemail] =useState('');
  const [tel,settel] =useState();
  const [country,setcountry] =useState();
  const [Address,setadress] =useState();
  const [password1,setpassword1] =useState('');
  const [password2,setpassword2] =useState('');
   const SingUpGoogle = async (e)=>{
    e.preventDefault();
    try {
      Google();
    } catch (error) {
      toast.error(error);
    }
    navigate('/shop');
  }
  const userinsert = (e)=>{
    if (type=='deliver') {
      if(!admin)return navigate('/admin/login');
    }
    e.preventDefault();
    if(!name || !country || !Address || !password1)return  toast.error('filled all the box')
    if(tel.length<13)return toast.error('invalid phone number');
    if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))return toast.error('invalid email');
    if(password1!=password2)return toast.error('password are not identical');
    const data = {
      name,
      email,
      telephone:tel,
      password:password1,
      country,
      Address
    };
      const api =" https://backend-iota-three-50.vercel.app/api/v2";
            const IdemUP = async (params)=>{
        
              const res = await fetch(api+'/'+type, {
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
      } catch (error) {
        toast.error(error.msg);
      }
      toast.success('welcome to nashmood'+name);
      navigate(type=='user' ? '/shop' : '/admin');
  }
  return (
  <>
   <Helmet>
      <link rel='stylesheet' href='/register.css'/>
    </Helmet>
    <video autoplay loop muted className='videofixed'>
      <source src="/photos/nashmood.mp4" type="video/mp4" />
    </video>
    <ToastContainer/>
  <form  className="container specialer" >

        <div>
        <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2">
                Name and Surname:</label>
            <input type="text"  name="name" placeholder="Enter your name here! please " value={name} id="u-name" onChange={(e)=>{setname(e.target.value)}} required />
         </div>  
 
        <div>
        <label
                htmlFor="tel"
                className="block text-gray-700 font-bold mb-2"
                >Tel:</label
              >
            <input type="tel"  name="tel" placeholder=" 00237 657 0789 95  " value={tel} onChange={(e)=>{settel(e.target.value)}} id="u-tel" required />
         </div>  
 
	
	<div>
  <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
                >Email:</label
              >
					<input type="email"  name="email" placeholder="Enter your e-mail " value={email} id="u-email" onChange={(e)=>{setemail(e.target.value)}} required />
	</div> 
    <div>
    <label
                htmlFor="Country"
                className="block text-gray-700 font-bold mb-2"
                >Country:</label
              >
        <input type="text"  name="Country" placeholder="Enter your country  " value={country} id="u-country" onChange={(e)=>{setcountry(e.target.value)}} required />
     </div>  

    <div>
    <label
                htmlFor="adress"
                className="block text-gray-700 font-bold mb-2"
                >Adress:</label
              >
        <input type="text"  name="adress" placeholder="example: douala ,kotto bloc G ,Rue007 " value={Address} onChange={(e)=>{setadress(e.target.value)}} id="u-address" required />
     </div>  

			<div>
      <label
                htmlFor="pwd1"
                className="block text-gray-700 font-bold mb-2"
                >Paswword:</label
              >
			 <input type="password" name="pwd1" placeholder="enter  password" id="u-pwd1" value={password1} onChange={(e)=>{setpassword1(e.target.value)}} required />
			 
			</div>
            <div>
            <label
                htmlFor="pwd2"
                className="block text-gray-700 font-bold mb-2"
                >Confirm Password:</label
              >
                <input type="password"  name="pwd2" placeholder="confirm your password  " value={password2} id="u-pwd2" onChange={(e)=>{setpassword2(e.target.value)}} required />
             </div>  
             <div><input type="submit" name="submit" id="login" className="a" onClick={userinsert} /></div>

            {type=='user' ? <><button className="a google" id="google" onClick={SingUpGoogle}>SingUP with Google</button></> : <></>}
            <div><a href="/login">LOGIN</a></div>
			 
</form>
  </>
  )
}

export default Registerpage
