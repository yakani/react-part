import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../component/Spinner';
import { toast } from 'react-toastify';
const Compliationpage = () => {
 const { id } = useParams();
const [loading,setloading ]= useState(true);
const navigate = useNavigate();

 
const api = "https://backend-iota-three-50.vercel.app";
   useEffect(() => {
     fetch(api+"/api/v2/const/unic/"+id,{
        credentials:"include"
     }).then(async (r) => {
       const resp = await r.json();
       const data = {product:resp.product} ;
       fetch(api+"/api/v2/trans",{
        method: "POST",
        credentials:"include",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(data),
       }).then(async (r) => {
        setloading(false);
        toast.success("your order have been place");
        navigate('/shop');
       });
     });
   }, []);
   
  return (
    <div>
      {loading ? <Spinner loading={loading}/> : <h1>Order place successfully</h1>}
    </div>
  )
}

export default Compliationpage
