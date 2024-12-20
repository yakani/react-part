import React from 'react'
import Topfeatures from './Topfeatures';
import Bottomfeature from './Bottomfeature';
import { useState,useEffect } from 'react';
import Spinner from './Spinner';
const Feature = ({ishome=false,product}) => {
  const [loading, setloading] = useState(true);
  const [goals,setgoals] = useState([]);
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
    const cat=["V","S","W"];
  return (
    <>
     <section id="clothes"className="my-5">
      {loading ? <Spinner loading={loading}/> :(
        <>
        <Topfeatures  cat={"V"} />
        <div className="row mx-auto container-fluid">
        {goals.map(
          goal=> goal.cat=="V" ? <Bottomfeature key={goal._id} goal={goal} ishome={ishome} /> : <></>
          )}
        </div>
        <Topfeatures  cat={"S"} />
        <div className="row mx-auto container-fluid">
        {goals.map(
          goal=> goal.cat=="S" ? <Bottomfeature key={goal._id} goal={goal} ishome={ishome} /> : <></>
          )}
        </div>
        <Topfeatures  cat={"W"} />
        <div className="row mx-auto container-fluid">
        {goals.map(
          goal=> goal.cat=="W" ? <Bottomfeature key={goal._id} goal={goal} ishome={ishome} /> : <></>
          )}
        </div>
       
        </>  ) }
 </section>
    </>
  )
}

export default Feature
