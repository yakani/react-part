import React from 'react'
import { useState ,useEffect } from 'react';

const Navbar = ({ishome}) => {
  const [actual, setactual] = useState('false');
  const reference= (value)=>{
        return ishome ? '/login' : '/'+value;
    }
  const toggle = ()=>
  {
    actual == "false" ? setactual("true") : setactual("false");
    const collapse = document.querySelector('.collapser');
    if (actual == "false")
    {
      collapse.style.display = "none";
    }else
    {
      collapse.style.display = "block";
    }
    
  }
  const colors = (e)=>
  {
    if(e.target.ariaBusy == "false ")
    {
      e.target.style.colors = red;
    }
  }

useEffect(()=>{

const url = window.location.href;

if (url.includes('/cart'))
 {
  document.querySelector('#cart').style.backgroundColor = "#6b11e0";
  document.querySelector('#cart').style.color = "white";
  console.log(url);
}else if(url.includes('/contact'))
{
  document.querySelector('#contact').style.backgroundColor = "#6b11e0";
  document.querySelector('#contact').style.color = "white";
}else if(url === "http://localhost:8080/")
{
  document.querySelector('#homer').style.backgroundColor = "#6b11e0";
  document.querySelector('#homer').style.color = "white";
}else
{
  document.querySelector('#homer').style.backgroundColor = "none";
}

},[])
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top ">
        <div className="container">
         <a ><img className="imd" src="/photos/logo.jpg" alt="" srcset=""/> NASH MOOD </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded={actual} aria-label="Toggle navigation"  onClick={toggle}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapser navbar-collapse links" id="navbarSupportedContent" >
            <ul style={{ listStyleType: "none" }} className="navbar-nav ml-auto"/>
             
              <li className="nav-item" >
                <a className={"nav-link "} href='/'  id="homer" data-click = "false" >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link"   id="account"  onClick={()=>{ishome ? '' :
                  document.querySelector('.modals').style.display = "block"
    }} data-click = "false"> Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={reference('logout')} id="logout" data-click = "false">  {ishome ? "LOGIN" : "LOGOUT"} </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={reference('cart')} id='cart' data-click = "false"> <img src="/photos/panier.png" alt=""  className='panier'/></a>
              </li>
              <li className="nav-item" data-click = "false">
                <a className="nav-link" id='contact' href={reference('contact')}> Contact us</a>
              </li>
             
        
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
