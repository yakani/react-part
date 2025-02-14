const url = "https://backend-iota-three-50.vercel.app";
const LoginDeliver = async(params)=>{
    const res = await fetch(url+'/api/v2/deliver/login',{
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      credentials: "include",
      body:JSON.stringify(params)
    });
    const resp = await res.json();
   
     return resp;

 }

 const DeleteDeliver = async ()=>{
    const res =  await fetch(url+'/api/v2/deliver',{
      method:"DELETE",
      credentials:"include"
      
    });
    return;
  }
  const insertdeliver = async (params)=>{
    const res = await fetch(url+'/api/v2/deliver',{
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
