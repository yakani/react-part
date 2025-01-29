import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
const Bottomfeature = ({goal,ishome=false}) => {
const [index,setindex] = useState(0);
const [visible,setvisbile] = useState(false);
const Next = ()=>{
  if (index > (goal.img).length - 1)
  {
    setindex(0);
  }else
  {
    setindex(index + 1);
  }
  
}
  return (
    <>
    <div className=" product text-center col-lg-3 col-md-4 col-12 m-2" onMouseOver={setvisbile(true)} onMouseOut={setvisbile(false)}>
      <div>{!visible ? <></> : <img src="/photos/next.jpg" className="next"  alt=""  onClick={Next}/>}
    <img className="img-fluid mb-3 rotate border" src={index > (goal.img).length - 1 ? goal.img[0].picture:goal.img[index].picture}  alt=""/>
      </div>
  <div className="star">
    <i className="fa fa-star"></i>
  </div>
  <h5 className="p-name">{goal.name} </h5>
  <h4 className="p-price"> {goal.price +'FCA'} </h4> 
    <NavLink to={ishome ? '/login' : '/product/'+goal._id}>
        <button className="buy-btn" id={goal._id}>ADD TO CART <img src="/photos/panier.png" alt="" className='panier'  /></button>
    </NavLink>
    </div>
    </>
  )
}

export default Bottomfeature
