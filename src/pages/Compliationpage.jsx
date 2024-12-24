import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../component/Spinner';
const Compliationpage = () => {
 const { id } = useParams();
 const [product,setproduct] =useState({});
const [loading,setloading ]= useState(true);
const [next,setnext ]= useState(false);
 
 
const api = "https://backend-iota-three-50.vercel.app";
   useEffect(() => {
     fetch(api+"/api/v2/const/unic/"+id,{
        credentials:"include"
     }).then(async (r) => {
       const resp = await r.json();
       setproduct( {product:resp.product, lat:resp.lat, lon:resp.lon} );
     });
   }, []);
     useEffect(() => {
       fetch(api+"/api/v2/trans",{
        method: "POST",
        credentials:"include",
        body: JSON.stringify(product),
       }).then(async (r) => {
        setloading(false);
       });
     }, []);

  return (
    <div>
      {loading ? <Spinner loading={loading}/> : <h1>Order place successfully</h1>}
    </div>
  )
}

export default Compliationpage
