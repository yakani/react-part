import React from 'react'
import Topfeatures from './Topfeatures';
import Bottomfeature from './Bottomfeature';
import { useState,useEffect } from 'react';
import Spinner from './Spinner';
const Feature = ({ishome=false}) => {
  const [loading, setloading] = useState(true);
  const [goals,setgoals] = useState([]);
  useEffect(()=>{
    const collected= async()=>{
      try {
        const resp = await  fetch('http://localhost:7000/api/v2/goal');
        const goal = await resp.json();
        setgoals(goal);
      } catch (error) {
        console.log(error);
      }finally{
        setloading(false)
      }
    }
    collected();},[])
    
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
