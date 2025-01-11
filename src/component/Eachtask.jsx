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
              <div className="trans-card" >
                
            
                    <div className="trans-body">
                        <h5 className="trans-text"> { "Name: "+task.user.name} </h5>
                        <p className="trans-text"> {"Tel:"+task.user.telephone} </p>
                        <p className="trans-text"> {"Adress:"+task.user.adress} </p>
                        <h5 className="trans-text"> {"product " + task.product.name + ",size" +task.product.qty } </h5>
                        <p className="trans-text"> {"pay:"+(task.product.qty*task.product.price)} </p>
                        <button  className="btn btn-card" onClick={()=>Goodtask(task._id)}>good</button>
                        <button  className="btn btn-card" onClick={()=>Removetask(task._id)}>remove</button>
                      </div>
              
              </div>
   </>)
  
}

export default Eachtask
