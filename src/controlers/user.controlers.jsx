const url = "https://backend-iota-three-50.vercel.app";
import axios from "axios"
let ishome =localStorage.getItem('ishome');
  let time = localStorage.getItem('timeuser');
 
  const Setusertime = (ans)=>{
    ishome= ans;
    var d= new Date();
    time = [d.getFullYear(),d.getMonth(),d.getDay()];
    console.log(time);
    save();
    return;
  }
  const Resolveproblem = (params)=>
  {
    return;
  }

  const  Login = async (params)=>{
    try {
      const res  = await fetch(url+"/api/v2/user/auth",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(params)
      }) ;
      const resp = await res.json();
      if(!res.ok){throw new Error(resp.msg);} 
      
    } catch (error) {
      throw new Error(error);
    }
    
  Setusertime(false);
  }

  const update = async (params) =>{
    const res  = await fetch(url+'/api/v2/user',{
      method:"PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(params)
    });
    return ;
  }
  const SingUp = async()=>{
    Setusertime(false);
    window.location.href=url+'/auth/google/sign';
  }
  const SingIn = async ()=>{
     Setusertime(false);
    window.location.href=url+'/auth/google';
   
  }
  const logout = async()=>{
    const logout=await fetch(url+'/api/v2/user/logout',{
      method:"POST",
    });  
  
    if(!logout.ok){
      throw new Error('an error has occur');
    }

    return;
  }
  const userdata= async ()=>{
    try {
      const rest = await axios.get(url+'/api/v2/user/profile',{
        withCredentials:true
      });
     Setusertime(false);
      
    } catch (error) {
      Setusertime(true);
    }
  

    return rest;
  }

  const insertuser = async (params)=>{
   const res = await fetch('http://localhost:7000/api/v2/user',{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(params)
   });
   const resp = await res.json();
   if(!res.ok){throw new Error(resp.msg)}
  Setusertime(false);
  }

  const save= ()=>{
    localStorage.setItem('ishome',ishome);
    localStorage.setItem('timeuser',time);
   
  }

export {
userdata,
insertuser,
logout,
Login,
update,
save,
SingIn,
SingUp,
Resolveproblem
}
