const api =  "https://backend-iota-three-50.vercel.ap";
const Insertpb = async(params)=>{

    const res = await fetch(api+"problem",{
        method:"POST",
        credentials: "include",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(params)
    });
    if(!res.ok){return "not found"}
    return;
}
const Collectedpb = async()=>{
    const res = await fetch(api+"admin/problem");
    const resp = res.json();
    return resp;
}
export{
    Insertpb,
    Collectedpb
}
