import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader';
const ovveride = {
    display:'block',
    margin: '100px auto'
}
const Spinner = ({loading,size=70}) => {
  return (
    <ClipLoader 
    color='#4338ca'
    loading={loading}
    cssOverride={ovveride}
    size={size}
    />
  )
}

export default Spinner
