import React from 'react'
import { toast } from 'react-toastify';
const Eachtask = ({Remove,task}) => {
    
    const Goodtask = (id)=>{
           Remove(id);
           toast.success('done');
    }
    const Removetask = (id)=>{
            Remove(id);
            toast.success('remove');
    }
 
  return (<>
              <div className="col" >
                <div className="card"  >
                    <div className="card-img-top" >
                        <iframe src={task.lat ? "https://www.google.com/maps?q="+task.lat+","+task.lon+"&hl=es;z=14&output=embed":""} frameborder="0"></iframe>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"> { "Name: "+task.user.name} </h5>
                        <p className="card-text"> {"Tel:"+task.user.telephone} </p>
                        <h5 className="card-title"> {"product " + task.product.name + ",size" +task.product.qty } </h5>
                        <p className="card-text"> {"pay:"+(task.product.qty*task.product.price)} </p>
                        <button  className="btn btn-primary" onClick={()=>Goodtask(task._id)}>good</button>
                        <button  className="btn btn-primary" onClick={()=>Removetask(task._id)}>remove</button>
                      </div>
                </div>
              </div>
   </>)
  
}

export default Eachtask
