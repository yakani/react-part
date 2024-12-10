import React from 'react'
import Barhome from './Barhome';
import Feature from './Feature'
const Homepage = (product) => {
  return (
    <>
    <div className='inmodals'>
    <Barhome/>
    <Feature product={product} />
    </div>
    
    </>
  )
}

export default Homepage
