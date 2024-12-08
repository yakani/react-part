
const url = "https://backend-iota-three-50.vercel.ap";
const AddItem = async (params)=>{
    const res = await fetch(url+'/api/v2/goal',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(params)
    });
    return ;
  }

  const Updateitem = async(id,params)=>{
    const res = await fetch(url+'/api/v2/goal/'+id, {
      method: 'PUT',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(params)
    });
    return;
  
  }
  const DeleteItem = async (id)=>{
    const res =  await fetch(url+'/api/v2/goal/'+id,{
      method:"DELETE",
    });
    return;
  }
 export{
    DeleteItem,
    Updateitem,
    AddItem
 }
