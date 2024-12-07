import React from 'react'
import { NavLink } from 'react-router-dom'

const Barhome = ({ishome=false}) => {
  return (
    <>
         <section id="home">
        <div className="container">
         <h5>NEWS ARRIVALS</h5>
         <h1><span>Best Price</span>This Year</h1>
         <p>Get the best experience of confort by using our products</p>
         
         <NavLink to={ishome ? '/login': '/shop'}>
            <button>Shop Now</button>
         </NavLink>
         
        </div>    
    </section>
    </>
  )
}

export default Barhome
