import React from 'react'

const Topfeatures = ({cat}) => {
    const name = (cat!='V' && cat!="S") ? 'Best Watches' :(cat!='V' ? 'Best Shoes':'Dresses & Jumpsuits') ;
 
  return (
   <>
     <div className=" container text-center mt-5 py-5" >
      <h3> {name} </h3>
      <hr className="mx-auto"/>
      <p>Here you can check out our new products with fair price on NASHMOOD SHOP</p>
 </div> 
   </>
  )
}

export default Topfeatures
