import React from 'react'
import Spinner from '../component/Spinner';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
const Cartpage = ({deleteproduct }) => {
  const navigate = useNavigate();
  const [loading,setloading]=useState(false);
  const [goals,setgoals] = useState([]);
  const [lon,setlon] = useState(false);
  const [orders,setorders]= useState([]);
  
  const deleteidem = (params)=>{
    const confirm = window.confirm('are you sure to remove');
    if(!confirm)return;
    deleteproduct(params);
    toast.success('have been delete');
    navigate('/shop');
  };

  const BuyItem = async (params,id)=>{
    if(lon){navigate('/update');}else{ navigate('/payment/'+id);}
  
  }
  const api = "https://backend-iota-three-50.vercel.app";
   useEffect(() => {
     fetch(api+"/api/v2/user/profile",{
      credentials:"include",
     }).then(async (r) => {
       const resp = await r.json();
       if(resp.country == "country" || resp.country== "")
       {
          setlon(true);
       }else{setlon(false);}
      
     });
   }, []);
  useEffect(()=>{
    const getgoal = async()=>{
try { 
  const api = "https://backend-iota-three-50.vercel.app/api/v2";
  const res = await fetch(api+"/const/const",{
    credentials: "include",
  });
  const resp = await res.json();
setgoals(resp);
} catch (error) {
  console.log(error);
}
    }
    getgoal();
  },[]);
  useEffect(() => {
    fetch(api+"/api/v2/trans/user",{
     credentials:"include",
    }).then(async (r) => {
      const resp = await r.json();
        setorders(resp);
        setloading(false);
    });
  }, []);

  return (
    <>
<section  class="container sproduct my-5 py-5" id="all">
  {loading ? <Spinner loading={loading}/>:((goals.length!=0) ? goals.map(goal=>
<div className='row mt-5' key={goal._id}>
  <div className='col-lg-5 col-md-12 col-12'><img src={goal.product.picture} alt="" className="ims-fluid w-100 pb-1 unique"/></div>
  <div className="col-lg-5 col-md-12 col-12">
    <h6 className='p-price'> {goal.product.name} </h6>
    <h2 className="p-name"> {goal.product.price*goal.product.qty+"CFA" } </h2>
    <h5> {goal.size=="no" ? "": ("Size:"+goal.product.size)} </h5>
    <h5> {"QTY:"+goal.product.qty} </h5>
    <button className="buy-btn" onClick={()=>BuyItem(goal.product,goal._id)}>BUY</button>
    <button className="buy-btn" onClick={()=>deleteidem(goal._id)}>Remove</button>
  </div>
</div>):<div><h1>Cart is empty</h1></div>)}
{loading ? <Spinner loading={loading}/> : <div className='orders'>{orders.length == 0 ? <h1>no orders</h1>:orders.map(order =>
  <div className="cartorder" key={order._id}>
    <img src={order.product.picture} alt="" className="imgorder" />
    <h2>{"size "+ order.product.size}</h2>
    <h2>{"Price "+ order.product.price * order.product.qty }</h2>
  </div>
)} </div>}

</section>
    </>
  )
}

export default Cartpage
