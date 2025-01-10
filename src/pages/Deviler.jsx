import React from 'react'
import { useEffect,useState } from 'react';
import Eachtask from '../component/Eachtask';
import Spinner from '../component/Spinner';
import { useLoaderData,useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
const Deviler = ({Remove}) => {
  const Employ = useLoaderData();
  const [tasks,settasks] = useState([]);
  const url = "https://backend-iota-three-50.vercel.app";
  const [loading,setloading] = useState(true);
  useEffect(()=>{
    const Gettask = async() =>{
        try {
            const res = await fetch(url+'/api/v2/trans');
            const resp = await res.json();
          let resp2 = [];
          let x= 0;
          for (let index = 0; index < resp.length; index++) {
           if(resp[index].user.country==Employ.country){
            resp2[x] = resp[index];
            x++;
           }
          }
           settasks(resp2);
        } catch (error) {
            toast.error(error);
        }finally{
            setloading(false);
        }
    }
    Gettask();

},[]);

  return (
  <>
  <Helmet>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <link rel="stylesheet" href="/style.css"/>
  </Helmet>
  <ToastContainer/>
  <section id="featured" className="my-5 pb-5">
        <div className="container text-center">
            <div className="row row-cols-auto" id="all">
  {loading ? <Spinner loading={loading}/> :(tasks.length!==0 ? tasks.map(task=><Eachtask Remove={Remove} task={task}  key={task._id} />): <div className='col'><h1>NO command</h1></div>)}
  </div>
  </div>
  </section></>
  )
}
const DataDeliver = async()=>{
    try {
      const url = "https://backend-iota-three-50.vercel.app";
const res = await fetch(url+'/api/v2/deliver/unic',{
  credentials:"include"
});
  const resp = await res.json();
  return resp; 
    } catch (error) {
        console.log('Error:',error)
    }
 
}
export {Deviler as default , DataDeliver}
