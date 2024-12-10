import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../component/Spinner';
const Accountpage = ( {userdata,ishome} ) => {
    const [user,setuser] = useState();
    const [loading,setloading] = useState(true);
    useEffect(()=>{
        
            try {
            const data = userdata;
            setuser(data)
            } catch (error) {
                console.log(error)
            }finally{
                setloading(false)
            }
            
         
    },[])
    const navigate = useNavigate();
    const goto = ()=>{
       // console.log('yes')
        navigate('/update');
    }
  
  return (
    ishome == true ? <></> :
   <>
   <section className=" modals "  style={{display : "none"}} onMouseOver={()=>{
    
    document.querySelector('.inmodals').style.opacity = 0.6
    document.querySelector('.inmodals').style.zIndex = -1
    }}>
    {loading ? <Spinner/> : <>
        <span className="close my-x-btn" onClick={()=>{
            
            document.querySelector('.modals').style.display = "none"
            document.querySelector('.inmodals').style.opacity = 1

        } }>x</span>
        <div className="row m-1 p-1">
            <div className="col-lg-5 col-md-10 col-12 m-3">
                <h2>Actual data</h2>
                    <h3 className="py-4" id="name">  {'NAME:'+ user.name} </h3>
                    <h3 className="py-4" id="email" >{'Email:'+ user.email}</h3>
                    <h3 className="py-4" id="pwd">{user.password=="password" ? "password:password":""}</h3>
            </div> 
            <div className="col-lg-6 col-md-12 col-12 m-2 ">
                
                <h3 className="py-4" id="tel">{'Tel:'+ user.telephone}</h3>
                <h3 className="py-4" id="country">{'Country:'+ user.country}</h3>
                <h3 className="py-4" id="address">{'Adress:'+ user.Address}</h3>
            
                <button className="btn-user"  onClick={()=>goto()}>Edit</button>
                
                </div>      
            </div>
    </>}
        
          
    </section>
   </>
  )
}

export default Accountpage
