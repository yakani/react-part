import { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
const Adminlogin = ({Getcode}) => {
  const [code,setcode] = useState();
  const [input,setinput] = useState();
  const [message,setmessage] = useState('Send code');
  const navigate = useNavigate();
  const Sendcode = async(e)=>{
    if(message=="code have been send")return;
    e.preventDefault(); 
    setmessage("code have been send");
    const value = await Getcode();
    console.log(value);
    setcode(value);
  };
  const Checkcode = (e)=>{
   e.preventDefault();
    if(code!=input)return toast.error('invalide code'); 
    toast.success('login....'); 
     navigate('/admin');
  
  }
  return (
   <>
   <Helmet>
   <link rel="stylesheet" type="text/css" href="/login.css"/>
	<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"/>
   </Helmet>
  
   <ToastContainer/> 
   <video autoplay loop muted className='videofixed'>
      <source src="/photos/nashmood.mp4" type="video/mp4" />
    </video>
   <form  class="container login" >
<div><input type="submit" value={message} onClick={Sendcode} class="a" data-send/></div>
<div>
<label
                htmlFor="pwd2"
                className="block text-gray-700 font-bold mb-2"
                >Code:</label
              >
<input type="text" name="pwd2" placeholder="enter  password" id="password" onChange={(e)=>setinput(e.target.value)} data-pass required/>

</div>
<div> <input type="submit" name="submit" id="login" onClick={Checkcode} data-form class="a"/> </div>

</form>

   </>
  )
}

export default Adminlogin
