import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import Spinner from '../component/Spinner';
import { toast } from 'react-toastify';
const Productpage = ({userid , ishome}) => {
    const { id } = useParams();
    const  goal = useLoaderData();
    const [imager,setimage] = useState(goal.img[0].picture);
    const [idimage,setidimage] = useState(goal.img[0]._id);
    const [size,setsize] = useState('no');
    const [quatity,setquantity]=useState(0);
    const [loading,setloading] = useState(true);
    const navigate= useNavigate();

    const exchange = (params)=>{
        setimage(params);
       
    }
    const sizesubmit = (param1)=>{
        setsize(param1);
        
    }
    const introduce= ()=>{
        if(ishome){return navigate('/login');}
        if(quatity==0)return toast.error('how many item do you want');
        const data={
            user:userid,
            product:{
                picture:imager,
                 size,
                qty:quatity,
                name:goal.name,
                price:goal.price
            }
        };
        console.log(data);

          const api =" https://backend-iota-three-50.vercel.app/api/v2";
                const IdemUP = async (params)=>{
                  const res = await fetch(api+'/const', {
                     method: 'POST',
                    credentials: "include",
                    headers:{
                      'Content-Type':'application/json'
                    },
                    body:JSON.stringify(params)
                  });
                  if(res.ok){  toast.success('insert into cart');
                    navigate('/shop');}
                }
                IdemUP(data)
    };
    

  return (
    <>
    <section className="container sproduct my-5 py-5 inmodals" id="all" >
        <div className=" gridbox mt-5 ">
        <div className="gridimg mt-5">
            {goal.img.map(image=> (image.picture!=imager) ? <img src= {image.picture}  key={image._id} alt="" className='ims-fluid  pb-1 sub' style={{height:"100px"}} onClick={()=>exchange(image.picture)} />:<></>)}
            
        </div>
        <div className="col-lg-5 col-md-12 col-12">
            <img src={imager} className='img-fluid mb-3   unique' alt="" />
        </div>
        <div className="col-lg-5 col-md-12 col-12">
            <h3 className="py-4">{"Name: "+goal.name} </h3>
            <h2>{"price: "+goal.price +"CFA"} </h2>
            {goal.cat=='V' ?<><i> {size} </i>
            <div>
            <button className="buy-btn" onClick={()=>sizesubmit('L')}>L</button>
            <button className="buy-btn"  onClick={()=>sizesubmit('XL')}>XL</button>
            <button className="buy-btn" onClick={()=>sizesubmit('XXL')}>XXL</button></div>
            </> : (goal.cat=='S' ? <>
            size:
            <input type="number" name="" id="" max={45} min={32} onChange={(e)=>setsize((e.target.value>45 ||e.target.value<32) ? '0' : e.target.value)} />
            </>: <></>) }
            <i> {"QTY:"+quatity} </i>
           <div>
            <button className="buy-btn" onClick={()=>setquantity(( quatity==goal.qty) ? 0 :quatity+1)}>+</button>
            <button className="buy-btn" onClick={()=>setquantity(quatity==0  ? 0 : quatity-1)}>-</button>
            </div>
            {goal.qty == 0 ? <h2>Out of stock</h2>:<button className="buy-btn" onClick={()=>introduce()}>ADD TO  CART</button> }
            
        </div>
        </div>
    </section>
    </>
  )
}

const Productloader = async({params})=>{
    try {
        const api = "https://backend-iota-three-50.vercel.app/api/v2";
        const resp = await fetch(api+'/goal/'+params.id);
        const data = await resp.json();
        return data;
       
    } catch (error) {
        console.log(" Error failed to fetch ",error);
    }
}

export{ Productpage as default , Productloader}
