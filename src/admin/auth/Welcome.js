import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from "axios";

export default function Welcome(){
    let[user,setUser]=useState({});

  useEffect(()=>{
  getUser();
  },[user]);


  async function  getUser(){
    //var fd=new FormData();
    //fd.append('utoken',localStorage.getItem('utoken'));
 
    // var res=await fetch("http://localhost/ecom_backend/api/getuser",{
    //  headers:{
    //    'Content-Type':'application/json',
    //    'X-Requested-With':'XMLHttpRequest',
    //    'Authorization':'bearer '+localStorage.getItem('token')
    // }
    // });

    // var res=await fetch("http://localhost/ecom_backend/api/getuser",{
    //     //  mode: 'no-cors',
    //         	headers:{
    //                 'Accept': 'application/json',
    //         		'Content-Type': 'application/json',
    //                 'X-Requested-With': 'XMLHttpRequest',
    //                 'Authorization':'Bearer '+localStorage.getItem('token')
    //         	}

    //         });
    //         var data=await res.json();
    //         console.log(data);

      //  alert();
    //   const token2 = JSON.parse(localStorage.getItem('token'));
    //   alert(token2);

            await axios.get("http://localhost/multivendor/api/getuser", {
                headers:{
                            		'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                    'X-Requested-With': 'XMLHttpRequest',
                                    'Authorization':`Bearer `+localStorage.getItem('token')
                            	}
            })
            .then((res) => {
                
                console.log(res.data)
                localStorage.setItem('name',res.data.name)
               // window.location='/admin/welcome';
            })
            .catch(err => console.log(err));
        
   }
    return(
        <div>
          <h1>  Welcome   { localStorage.getItem('name')} </h1>
            
 
        </div>
    );
 }