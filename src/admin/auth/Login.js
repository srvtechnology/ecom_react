import { useEffect,useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();
    let[email,setEmail]=useState('');
    let[pass,setPass]=useState('');
    return(
        <div>
            <h1>Login Form</h1>
          
          
           <p><input type="text"  name="email" placeholder="enter email"  value={email} className="form-control" onChange={(e)=>{
               setEmail(e.target.value)
            }}/></p>
           <p><input type="text"  name="password" placeholder="enter password"  value={pass} className="form-control" onChange={(e)=>{
               setPass(e.target.value)
            }}/></p>
            <p><input type="submit"  name="submit" value="Login" className="btn btn-primary" onClick={async()=>{
               var fd=new FormData();
              
               fd.append('email',email);
               fd.append('password',pass);
               //console.log(fd);

               await axios.post("http://localhost/multivendor/api/admin/login", fd)
               .then((res) => {
                
                    console.log(res.data)
                    if(res.data.msg=="Unauthorised"){
                     alert("no");
                    }else{
                        localStorage.setItem('token',res.data.token)
                       // navigate('/admin/welcome');
                       window.location='/admin/welcome';
                    }
                   
                })
               .catch(err => console.log(err));
               
              // alert(localStorage.getItem("token"));
              // localStorage.setItem('token',this.res.data.token);
           

               
           }} /></p>
 
        </div>
    );
 }