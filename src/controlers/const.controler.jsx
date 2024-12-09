const api = "https://backend-iota-three-50.vercel.app/api/v2";
const deleteconst = async (params)=>{
    const res = await fetch(api+'/const/'+params,{
      method:"DELETE",
      credentials: "include"
    });
    return;
  }
  const Get_const = async ()=>{
    const res = await fetch(api+ "/const/const",{
      credentials:"include"
    });
    const resp = await res.json();
    if(!res.ok)return resp.msg;
    return resp;
  }
    const addconst = async (params) => {
      const res = await fetch(api+'/const', {
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
        deleteconst,
        Get_const
    }