import React from 'react'
import { useState,useEffect } from 'react';
import Spinner from '../component/Spinner';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
const AdimPage = ({Item_remove,Delete_deliver,admin,Logout}) => {
    const navigate = useNavigate();
    const [delivers,setdeliver] = useState([]);
    const [goals,setgoals] = useState([]);
    const [loading,setloading] = useState(true);
    const LogoutAdmin = ()=>{
      Logout();
       navigate('/login');
    }
    const RemoveItem = (id)=>{
        const confirm = window.confirm('are you sure to remove');
        if(!confirm)return;
        Item_remove(id);
        toast.success('remove');
        navigate('');
    }
    const RemoveDeliver = (id)=>{
        const confirm = window.confirm('are you sure to remove');
        if(!confirm)return;
        Delete_deliver(id);
        toast.success('remove');
        navigate('');
    }
    const UpdateItem = (id)=>{
            navigate('/item/update/'+id);
    }
    useEffect(()=>{
        if(!admin)return navigate('/admin/login');
        const Fetchdeliver = async ()=>{
            try {
                const res  = await fetch('http://localhost:7000/api/v2/deliver');
                const data = await res.json();
                setdeliver(data);
            } catch (error) {
                console.log(error);
            }finally{
                setloading(false);
            }
        }
        const Fetchgoal = async ()=>{
            try {
                const res  = await fetch('http://localhost:7000/api/v2/goal');
                const data = await res.json();
                setgoals(data);
            } catch (error) {
                console.log(error);
            }finally{
                setloading(false);
            }
        }
        Fetchdeliver();
        Fetchgoal();
    },[])
  return (
<>
<Helmet>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
<link rel="stylesheet" type="text/css" href="/admin.css" />
</Helmet>
<ToastContainer/>
<div className="flex">
<div className="g-col-3 g-col-2 border border-1" id="flex1">
    <div><a href="/item" ><button data-item className="btn btn-primary">Add an item</button></a></div>
    <div><button data-employ className="btn btn-primary"onClick={LogoutAdmin}>logout</button></div>
    
</div>
<div className="g-col-3 g-col-2 border border-1">
<div><a href="/deliver/register" ><button data-employ className="btn btn-primary">Add a deliver</button></a></div>
</div>
<div className="g-col-3 g-col-2 border border-2" id="flex2">
    <h2> Items</h2>
    {loading ? <Spinner loading={loading}/> : 
    goals.map(goal=> <> 
    <div className='goal'>
    <div className='img'><img src={goal.img[0].picture} alt=""  style={{width:"50%"}}/></div>
    <div className='title'> {"name : "+goal.name} </div>
    <div className='title' >{"price : "+goal.price+"CFA"}</div>
    <div className='title'>{"qty : "+goal.qty}</div>
    <div></div>
    <div><button className="btn btn-primary" onClick={()=>UpdateItem(goal._id)}>Update</button></div>
    <div><button className="btn btn-primary" onClick={()=>RemoveItem(goal._id)}>Remove</button></div>
</div>
   </>)}
</div>
<div className="g-col-3 g-col-2 border border-2" id="flex3">
    <h2>Deliver</h2>
    {loading ? <Spinner loading={loading}/> : 
    delivers.map(goal=> <>  
    <div className='card'>
    <div className='title'>{ "Name: "+goal.name} </div>
    <div className='title'>{ "Tel: "+goal.telephone}</div>
    <div className='title'>{ "Address: "+goal.Address}</div>
    <div className='title'>{ "Country: "+goal.country}</div>
    <div className='title'></div>
    <div ><button className="btn btn-primary" onClick={()=>RemoveDeliver(goal._id)}>Remove</button></div>
     </div></>)}
</div>
   </div> 
</>
  )
}

export default AdimPage
