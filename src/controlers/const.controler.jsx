const deleteconst = async (params)=>{
    const res = await fetch('http://localhost:7000/api/v2/const/'+params,{
      method:"DELETE",
      credentials: "include"
    });
    return;
  }
    const addconst = async (params) => {
      const res = await fetch('http://localhost:7000/api/v2/const', {
        method: 'POST',
        credentials: "include",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(params)
      });
      return;
    };
    export {
        addconst,
        deleteconst
    }