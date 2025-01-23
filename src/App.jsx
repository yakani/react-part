import { useState } from 'react';
import { 
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,

 } from "react-router-dom";
import { insertuser,userdata,Login,logout ,update,SingIn,SingUp } from './controlers/user.controlers';
import { code, saveAdmin,AdminLogout } from './controlers/admin.controler';
import { Updateitem,DeleteItem,AddItem,Get_goal } from './controlers/goal.controler';
import {Insertpb } from './controlers/problem.controler';
import { DeleteTrans } from './controlers/trans.controler';
import { deleteconst} from './controlers/const.controler';
import { DeleteDeliver,LoginDeliver,insertdeliver } from './controlers/deliver.controler';
import Payment from './component/indexpay';
import Adminlogin from './pages/Adminlogin';
import UpdateItempage from './pages/UpdateItempage';
import Mainlayout from './mainlayout/Mainlayout';
import Cartpage from './pages/Cartpage';
import Loginpage from './pages/Loginpage';
import Productpage, { Productloader} from './pages/Productpage';
import Registerpage from './pages/Registerpage';
import Homepage from './component/Homepage';
import Products from './pages/Products';
import Notfoundpage from './pages/Notfoundpage';
import Uptadeuser from './pages/Uptadeuser';
import Logout from './pages/Logout';
import AdimPage from './pages/AdimPage';
import Deviler,{DataDeliver} from './pages/Deviler';
import Contactpage from './pages/Contactpage';
import AddItempage from './pages/AddItempage';
import Compliationpage from './pages/Compliationpage';
function App() {
  let ishome =localStorage.getItem('ishome');
  let isadmin = JSON.parse(localStorage.getItem('isadmin')) || {admin : false} ;
  let admintime = JSON.parse(localStorage.getItem('timeoutadmin')) || { date :0 };
  let d = new Date();
  const user = userdata();
let home = ishome=='false' ? false : true;
 const checkadmin = ()=>{
  if(admintime.date==0 || admintime.date <= Date.now()){
    isadmin.admin=false;
    admintime.date=0;
    saveAdmin();
  }
  return;
}
checkadmin();

const router= createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/item/update/:id" element={<UpdateItempage UpdateItem={Updateitem}  admin={isadmin.admin} />} loader={Productloader}  />
   <Route path="/item" element={<AddItempage Additem={AddItem} admin={isadmin.admin} />}   />
   <Route path="/admin/login" element={<Adminlogin Getcode={code} />}   />
   <Route path="/login" element={<Loginpage insert={Login} type={'user'}  Google={SingIn} />}   />
   <Route path="/payment/:id" element={<Payment />}   />
  <Route path="/register" element={<Registerpage insert={insertuser} type={'user'} Google={SingUp} />}  />
  <Route path="/deliver/register" element={<Registerpage insert={insertdeliver} type={'deliver'} admin={isadmin.admin} />}  />
  <Route path="/admin" element={<AdimPage Item_remove={DeleteItem} Delete_deliver={DeleteDeliver} admin={isadmin.admin} Logout={AdminLogout} />} />
  <Route path="/deliver/login" element={<Loginpage insert={LoginDeliver}  type={'deliver'}/>}  />
  <Route path="/deliver" element={<Deviler  Remove={DeleteTrans} />} loader={DataDeliver} />
  <Route path="/update" element={<Uptadeuser userupdate={update} />}   loader={userdata} />
   <Route path="/" element={<Mainlayout ishomer={home} data={userdata} />}>
    <Route index element={<Homepage product={Get_goal} />} />
    <Route path="/shop" element={<Products product={Get_goal}  />}/>
    <Route path="/logout" element={<Logout logoutuser={logout} />}   />
    <Route path="/product/:id" element={<Productpage userid={user._id} />} loader={Productloader}  />
    <Route path="/cart" element={<Cartpage deleteproduct={deleteconst}   />}   />
    <Route path="/contact" element={<Contactpage Resolveproblem={Insertpb} />}   />
    <Route path="/compilation/:id" element={<Compliationpage  />}   />
    <Route path="*" element={<Notfoundpage/>}/>
  </Route>
  <Route path="*" element={<Notfoundpage/>}/>
    </>
 
))

  return <RouterProvider router={router}/>
}

export default App
