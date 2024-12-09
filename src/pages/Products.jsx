import React from 'react';
import Spinner from '../component/Spinner';
import { useState, useEffect } from 'react';
import Bottomfeature from '../component/Bottomfeature';
const Products = () => {
    const [loading,setloading] = useState(true);
    const [goals,setgoals] = useState([]);
    useEffect(()=>{   const products = async ()=>{
        try {
            const resp = await fetch('https://backend-iota-three-50.vercel.app/api/v2/goal');
            const goal = await resp.json();
            setgoals(goal);
        } catch (error) {
            console.log(error)
        }finally{
            setloading(false);
        }
    }
    products();},[])
 

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
