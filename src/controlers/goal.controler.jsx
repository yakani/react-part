const api = "https://backend-iota-three-50.vercel.app/api/v2";
const AddItem = async (params)=>{
    const res = await fetch(api+'/goal',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(params)
    });
    if(!res.ok){console.log(params)}
    return ;
  }

  const Get_goal= async ()=>{
    const res = await fetch(api+"/goal");
    const resp = await res.json();
   // if(!res.ok)return resp.msg;
    console.log(resp);
    return resp;
   
  }

  const Updateitem = async(id,params)=>{
    const res = await fetch(api+'/goal/'+id, {
      method: 'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(params)
    });
    return;
  
  }
  const DeleteItem = async (id)=>{
    const res =  await fetch(api+'/goal/'+id,{
      method:"DELETE",
    });
    return;
  }
 export{
    DeleteItem,
    Updateitem,
    AddItem,
    Get_goal
 }
