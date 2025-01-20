import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
const AddItempage = ({Additem,admin}) => {
    const navigate = useNavigate();
    const [name,setname] = useState();
    const [category,setcategory] = useState();
    const [price,setprice] = useState();
    const [quantity,setquantity] = useState();
    const [img,setimg] = useState();
    const Submititem = (e)=>{
        if(!admin)return navigate('/admin/login');
        e.preventDefault();
        if(!price,!category,!name,!quantity,!img)return toast.error('filled all the box');
        const data ={
            name,
            qty:quantity,
            cat:category,
            price,
            img
        };
        const AddItem = async (params)=>{
            const res = await fetch('https://backend-iota-three-50.vercel.app/api/v2/goal',{
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify(params)
            });
            if(res.ok){
        toast.success('insert');
        console.log(params);
         }
  
          }
          
       try {
        AddItem(data);
        navigate('/admin');
       } catch (error) {
        toast.error(error.msg);
       }
    }

  return (
    
    <>
    <Helmet>
    <link rel="stylesheet" type="text/css" href="/login.css"/>
	<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"/>
    </Helmet>
    <video autoplay loop muted className='videofixed'>
      <source srcset="/photos/nashmood.mp4" type="video/mp4" />
    </video>
    <ToastContainer/>
    <form  className="login"  enctype="multipart/form-data">
    <div className="container">
    <div className='mb-6 p-7 justify-center items-center'> 
   
          <h2 className='text-3xs text-center font-pregular text-gray-700 '>Add product</h2>
          
        </div>
        <div>
        <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
                >Name:</label
              >
            <input type="text"  name="name" placeholder="Enter the name of the idem here! please " onChange={(e)=>setname(e.target.value)} id="i-name" required />
         </div>  
 
        <div>
        <label
                htmlFor="price"
                className="block text-gray-700 font-bold mb-2"
                >Price:</label
              >
            <input type="number"  name="price" placeholder=" " id="i-price" onChange={(e)=>setprice(e.target.value)} required />
         </div>  
 

    <div>
    <label
                htmlFor="qty"
                className="block text-gray-700 font-bold mb-2"
                >Quantity:</label
              >
        <input type="number"  name="qty" placeholder="" id="i-qty" onChange={(e)=>setquantity(e.target.value)} required />
     </div>  

     

			<div>
            <label
                htmlFor="image"
                className="block text-gray-700 font-bold mb-2"
                >Images:</label
              >
			 <input type="file" multiple name="image" placeholder="choose img" id="i-img" onChange={(e)=>{
                console.log(e.target.files[0]);
                let imges = e.target.files;
                   let names = [] ;
                    for (let index = 0; index < imges.length; index++) {
                       names[index]=   {picture:"/photos/"+imges[index].name} ;
                    }
                setimg(names);
             }} required/>
			 
			</div>
           
            <div>
            <label
                htmlFor="cat"
                className="block text-gray-700 font-bold mb-2"
                >Category:</label
              >
			 <input type="text" name="cat" placeholder="enter the category" id="i-cat" onChange={(e)=>setcategory(e.target.value)} required/>
			 
			</div>
			<div> <input type="submit" name="submit" onClick={Submititem}  className="a"/> </div></div>
			
</form>
    </>
  )
}

export default AddItempage
