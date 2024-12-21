import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
const UpdateItempage = ({Updateitem,admin}) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const item = useLoaderData();
    const [name,setname] = useState(item.name);
    const [category,setcategory] = useState(item.cat);
    const [price,setprice] = useState(item.price);
    const [quantity,setquantity] = useState(item.qty);
    const [img,setimg] = useState(item.img);
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
        Updateitem(id,data);
        toast.success('insert');
        navigate('/admin');
    }

  return (
    
    <>
    <Helmet>
    <link rel="stylesheet" type="text/css" href="/register.css"/>
	<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet"/>
    </Helmet>
    <ToastContainer/>
    <form  className="container specialer" id="register" enctype="multipart/form-data">
      <div><a href="/admin">
      
      <FaArrowLeft className='mr-2'/>go back
      </a></div>
        <div>
        <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
                >Name:</label
              >
            <input type="text"  name="name" placeholder="Enter the name of the idem here! please " value={name} onChange={(e)=>setname(e.target.value)} id="i-name" required />
         </div>  
 
        <div>
        <label
                htmlFor="tel"
                className="block text-gray-700 font-bold mb-2"
                >Price:</label
              >
            <input type="number"  name="tel" placeholder=" " id="i-price" value={price} onChange={(e)=>setprice(e.target.value)} required />
         </div>  
 

    <div>
    <label
                htmlFor="qty"
                className="block text-gray-700 font-bold mb-2"
                >Quantity:</label
              >
        <input type="number"  name="qty" placeholder="" id="i-qty" value={quantity} onChange={(e)=>setquantity(e.target.value)} required />
     </div>  

     

			<div>
            <label
                htmlFor="image"
                className="block text-gray-700 font-bold mb-2"
                >Image:</label
              >
			 <input type="file" multiple name="image" placeholder="choose img" id="i-img"  onChange={(e)=>{
                console.log(e.target.files[0]);
                let imges = e.target.files;
                   let names = [] ;
                    for (let index = 0; index < imges.length; index++) {
                       names[index]=   {picture:"/photos/"+imges[index].name} ;
                    }
                setimg(names);
             }} />
			 
			</div>
           
            <div>
            <label
                htmlFor="color"
                className="block text-gray-700 font-bold mb-2"
                >Category:</label
              >
			 <input type="text" name="cat" placeholder="enter the category" id="i-cat" value={category} onChange={(e)=>setcategory(e.target.value)} required/>
			 
			</div>
			<div> <input type="submit" name="submit" onClick={()=>Submititem}  className="a"/> </div>
			
</form>
    </>
  )
}

export default UpdateItempage
