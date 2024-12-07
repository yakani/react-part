const LoginDeliver = async(params)=>{
    const res = await fetch('http://localhost:7000/api/v2/deliver/login',{
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(params)
    });
    const resp = await res.json();
   
     return resp;

 }

 const DeleteDeliver = async (id)=>{
    const res =  await fetch('http://localhost:7000/api/v2/deliver/'+id,{
      method:"DELETE",
      
    });
    return;
  }
  const insertdeliver = async (params)=>{
    const res = await fetch('http://localhost:7000/api/v2/deliver',{
     method:"POST",
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify(params)
    });
    const resp = await res.json();
    if(!res.ok){throw new Error(resp.message)}
   
    return resp.id;
   }
   export {
    insertdeliver,
    LoginDeliver,
    DeleteDeliver
   }