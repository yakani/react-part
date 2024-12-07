import React from 'react'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import Spinner from '../component/Spinner';
import {FaArrowLeft} from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Uptadeuser = ({userupdate}) => {
   
    const user = useLoaderData();
    const [loading,setloading] = useState(true);
    const navigate = useNavigate();
    const [name,setname] = useState(user.name);
    const [email,setemail] = useState(user.email);
    const [tel,settel] = useState(user.telephone);
    const [country,setcountry] = useState(user.country);
    const [address,setadress] = useState(user.Address);
    const [password1, setpassword1] = useState(user.password);
    const [password2, setpassword2] = useState(user.password);
    const updater = (e)=>{
        e.preventDefault();
        if(tel.length!=9)return toast.error('invalid phone number');
        
        if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))return toast.error('invalid email');
        if(password1!=password2)return toast.error('password are not identical');
        const data = {
            name,
            email,
            password:password1,
            telephone:tel,
            country,
            Address:address
        };
        const confirm = window.confirm('are you sure to change');
        if(!confirm)return;
        userupdate(data);
        toast.success('change');
        navigate('/account');
    };

  return (
    <>
    <Helmet>
        <link rel='stylesheet' href="/register.css"/>
    </Helmet>
   <ToastContainer/>
    <form  className="container" >
    <div className="">
        <a
          href="/account" 
        >
          <FaArrowLeft classNameName='mr-2' /> go back 
        </a>
      </div>
<div>
<label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
                >Name and Surname:</label>
    <input type="text"  name="name" placeholder="Enter your name here! please  "  id="u-name" value={name} onChange={(e)=>setname(e.target.value)}  required />
 </div>  

<div>
<label
                htmlFor="tel"
                className="block text-gray-700 font-bold mb-2"
                >Tel:</label
              >
    <input type="tel"  name="tel" placeholder="Enter your telphone numbere here! please " id="u-tel"  value={tel} onChange={(e)=>settel(e.target.value)} required />
 </div>  


<div>
<label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
                >Email:</label
              >
            <input type="email"  name="email" placeholder="Enter your e-mail  " id="u-email" value={email} onChange={(e)=>{setemail(e.target.value)}} required />
</div> 

<div>
<label
                htmlFor="Country"
                className="block text-gray-700 font-bold mb-2"
                >Country:</label
              >
<input type="text"  name="Country" placeholder="Enter your e-mail  " id="u-country" value={country} onChange={(e)=>{setcountry(e.target.value)}} required />
</div>  

<div>
<label
                htmlFor="adress"
                className="block text-gray-700 font-bold mb-2"
                >Adress:</label
              >
<input type="text"  name="adress" placeholder="example: douala ,kotto bloc G ,Rue007 " id="u-address" value={address} onChange={(e)=>setadress(e.target.value)} required />
</div>  

    <div>
    <label
                htmlFor="pwd1"
                className="block text-gray-700 font-bold mb-2"
                >Paswword:</label
              >
     <input type="password" name="pwd1" placeholder="enter  password" id="u-pwd1" value={password1} onChange={(e)=>setpassword1(e.target.value)}  required />
     
    </div>
    <div>
    <label
                htmlFor="pwd2"
                className="block text-gray-700 font-bold mb-2"
                >Confirm Password:</label
              >
        <input type="password"  name="pwd2" placeholder="confirm your password  " id="u-pwd2" value={password2} onChange={(e)=>setpassword2(e.target.value)} required />
     </div>  

    <div> <button classNameName="btn-user"  style={{fontSize:"15px", backgroundColor:"#6b11e0"}} onClick={updater} >send</button> </div>
    
    
    
</form>

    </>
  )
}

export default Uptadeuser
