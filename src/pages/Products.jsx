import React from 'react';
import Spinner from '../component/Spinner';
import { useState, useEffect } from 'react';
import Bottomfeature from '../component/Bottomfeature';
const Products = (product) => {
    const [loading,setloading] = useState(false);
    const [goal,setgoals] = useState([]);
    useEffect(()=>{
      const loadproduct= async ()=>{
        try {
          const api = "https://backend-iota-three-50.vercel.app/api/v2";
          const res = await fetch(api+"/goal");
          const resp = await res.json();
       setgoals(resp);
        } catch (error) {
          console.log(error)
        }finally{
        setloading(false);
        }
      }
      loadproduct();
      },[])
  return (
    <>
    <div className='inmodals'>
    <section id="clothes" className="my-5"></section>
    <section id="clothes"className="my-5">
    <div className=" container text-center mt-5 py-5" >
      <h3> </h3>
      <hr className="mx-auto"/>
      <p>Here you can check out our new products with fair price on NASHMOOD SHOP</p>
 </div> 
        <div className='row mx-auto container-fluid'></div>
        <div className='row mx-auto container-fluid'> {loading ? <Spinner loading={loading}/>: goals.map(goal=><Bottomfeature goal={goal} key={goal._id} ishome={false} />)} </div>
    </section></div>
    </>
  )
}

export default Products
