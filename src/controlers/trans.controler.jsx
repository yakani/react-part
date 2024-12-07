const DeleteTrans = async (id)=>{
    const res =  await fetch('http://localhost:8000/trans',{
      method:"DELETE",
    });
    return;
  }
  const InsertTransc = async(params)=>{
    const res = await fetch('http://localhost:8000/trans',{
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