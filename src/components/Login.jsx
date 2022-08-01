import React,{useState} from 'react'
import { Input } from 'antd';
import { Button ,Modal} from 'antd';
import axios from 'axios';
import config from './config';



const Login = () => {
    const [state,setState]=useState({
        "name":"",
        "email":""
    })


    const handleChange=(event)=>{
        setState({...state,[event.target.name]:event.target.value})
    
     }  

     const createData=()=>{

      

        axios.post(`${config.url}/jwt/login`,state).then(response=>{
            console.log(response.data);

            localStorage.setItem("token",response.data.token);
           
    
        
    
            setState({
                name:"",
                email:""
            })
        }).catch(err=>{
            console.log(err);
        })
    
     }
    
  return (
    <div>
        <h1>Login Here</h1>
    <Input placeholder="Name" value={state.name} onChange={handleChange}  name='name'/><br/>

    <Input placeholder="Email" value={state.email} onChange={handleChange} name='email'  style={{marginTop:"20px"}}/><br/>

    <Button type="primary" onClick={createData} style={{marginTop:"20px"}}>Login</Button>


   


  

    </div>
  )
}

export default Login