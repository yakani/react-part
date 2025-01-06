let isadmin =JSON.parse(localStorage.getItem('isadmin')) || {}; 
let admintime = JSON.parse(localStorage.getItem('timeoutadmin')) || {};
const url = "https://backend-iota-three-50.vercel.app";
const saveAdmin = ()=>{
    localStorage.setItem('isadmin',JSON.stringify(isadmin));
    localStorage.setItem('timeoutadmin', JSON.stringify(admintime));
  }
  const code = async ()=>{
    admintime= {date: Date.now() + 24*60*60*1000};
    isadmin={admin:true};
    saveAdmin();
    const res = await fetch(url+"/api/v2/user/admin",{
      method:"POST"
    });
    const resp = await res.json();
    return resp.pass;
  }
  const AdminLogout = ()=>{
    admintime={date:0};
    isadmin={admin:false};
    saveAdmin();
  }
  export {
    saveAdmin,
    code,
    AdminLogout
  }
