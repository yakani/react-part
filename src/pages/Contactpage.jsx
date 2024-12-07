import { useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
//import {Nashspinner} from '../component/Nashspinner';
const Contactpage = (Resolveproblem) => {
    const [description,setdescription] = useState('');
    const [emailuser, setemailuser] = useState('');
    const [address, setadress] = useState('');
    const controlinput = ()=>
    {
      if(!description || !emailuser || !address)return  toast.error('filled all the box');
      if(!emailuser.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))return toast.error('invalid email');
      const data =
      {
          user:emailuser,
          problem:description,
        
      }
      Resolveproblem(data);
      toast.success("problem send");
    }

  return <> 
  <section className="contact my-5 py-5"> 
    <div className="col-md-7 col-lg-8 ">
    <form className=" box" >
    <h2>Contact us</h2>
  <div className="row g-3">
    <div className="col-12">
      <label htmlFor="email" className="form-label">Email <span className="text-body-secondary"></span></label>
      <input type="email" className="form-control"
       id="email" placeholder="you@example.com"
       value={emailuser}
       onChange={(e)=>{setemailuser(e.target.value)}} />
      <div className="invalid-feedback">
        Please enter a valid email address 
      </div>
    </div>

    <div className="col-12">
      <label htmlFor="address" className="form-label">Problems</label>
      <input type="text" className="form-control"
       id="address" placeholder="description......" value={description} required=""
        onChange={(e)=>{setdescription(e.target.value)}}/>
      <div className="invalid-feedback">
        Please enter your problems
      </div>
    </div>

    <div className="col-12">
      <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
      <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" value={address}
      onChange={(e)=>{setadress(e.target.value)}}
      />
    </div>

  

  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="save-info"/>
    <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
  </div>


  </div>
  

  <hr className="my-4"/>

  <button className="w-100 btn btn-primary btn-lg"  onClick={controlinput}>submit</button>

</form>
  </div>
  </section>
 
  
     
   </>
  
}

export default Contactpage
