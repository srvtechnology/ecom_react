import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Reg(){
    const navigate = useNavigate();
    let[name,setName]=useState('');
    let[email,setEmail]=useState('');
    let[pass,setPass]=useState('');

     
    function nf(e){
        setName(e.target.value);
    }



   return(
       <>
       <div className="container">
           <h1>Registration Form</h1>
           
           <p><input type="text"  name="name"  placeholder="enter name" value={name} className="form-control" onChange={nf} /></p>
           <p><input type="text"  name="email" placeholder="enter email" value={email} className="form-control"  onChange={(e)=>{
               setEmail(e.target.value)
            }} /></p>
           <p><input type="text"  name="password"  placeholder="enter password" value={pass} className="form-control" onChange={(e)=>{
               setPass(e.target.value);
           }}  /></p>
           <p><input type="submit"  name="submit" value="submit" className="btn btn-danger" onClick={async()=>{
               var fd=new FormData();
               fd.append('back_name',name);
               fd.append('back_email',email);
               fd.append('back_password',pass);
               //console.log(fd);

               await axios.post("http://localhost/multivendor/api/register", fd)
               .then((res) => {
               // localStorage.setItem('token',res.data.token)
                    console.log(res.data.msg)
                    navigate('/admin/login');
                })
               .catch(err => console.log(err));
           

               
           }} /></p>
        </div>
       
       </>
      
   );
}