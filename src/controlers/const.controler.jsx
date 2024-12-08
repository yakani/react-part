
const url = "https://backend-iota-three-50.vercel.ap";
const deleteconst = async (params)=>{
    const res = await fetch(url+'/api/v2/const/'+params,{
      method:"DELETE",
      credentials: "include"
    });
    return;
  }

    const addconst = async (params) => {
      const res = await fetch(url+'/api/v2/const', {
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
