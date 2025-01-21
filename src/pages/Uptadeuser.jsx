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
   
    const updater = (e)=>{
        e.preventDefault();
        if(tel.length<13)return toast.error('invalid phone number');
        
        if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))return toast.error('invalid email');
        
        const data = {
            name,
            email,
            telephone:tel,
            country,
            Address:address
        };
        const confirm = window.confirm('are you sure to change');
        if(!confirm)return;
        const api =" https://backend-iota-three-50.vercel.app/api/v2";
        const IdemUP = async (params)=>{
          const res = await fetch(api+'/user/update', {
             method: 'PUT',
            credentials: "include",
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify(params)
          });
          if(res.ok){toast.success('insert');
        navigate('/');}
        }
        IdemUP(data);
        
    };

  return (
    <>
    <Helmet>
        <link rel='stylesheet' href="/login.css"/>
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
    <form  className="login" >  
       <div className='btn-container'> 
          <h2 className='text-3xs text-center font-pregular '>Edit account </h2>
        
        </div>
      <div className="container">
     
    <div className=" ">
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
    <input type="tel"  name="tel" placeholder="00273 655 0448 58 " id="u-tel"  value={tel} onChange={(e)=>settel(e.target.value)} required />
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

 

    <div> <button classNameName="text-lg text-gray-300 font-pregular text-center"  style={{fontSize:"15px", backgroundColor:"#6b11e0"}} onClick={updater} >send</button> </div>
    </div>
    
    
</form>

    </>
  )
}

export default Uptadeuser
