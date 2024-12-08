const url = "https://backend-iota-three-50.vercel.ap";
const DeleteTrans = async (id)=>{
    const res =  await fetch(url+'/trans/'+id,{
      method:"DELETE",
    });
    return;
  }
  const InsertTransc = async(params)=>{
    const res = await fetch(url+'/trans',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(params)
    });
    
    return ;
   } 
   export {

    InsertTransc,
    DeleteTrans
   }
