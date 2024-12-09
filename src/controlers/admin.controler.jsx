let isadmin = localStorage.getItem('isadmin');
let admintime = localStorage.getItem('timeoutadmin');
const url = "https://backend-iota-three-50.vercel.app";
const saveAdmin = ()=>{
    localStorage.setItem('isadmin',isadmin);
    localStorage.setItem('timeoutadmin',admintime);
  }
  const code = async ()=>{
    admintime=Date.now();
    isadmin=true;
    saveAdmin();
    const res = await fetch(url+"/api/v2/user/admin",{
      method:"POST"
    });
    const resp = await res.json();
    return resp.pass;
  }
  const AdminLogout = ()=>{
    admintime=0;
    isadmin=false;
    saveAdmin();
  }
  export {
    saveAdmin,
    code,
    AdminLogout
  }
