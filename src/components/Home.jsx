import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Form from './Form';

const Home = () => {
    const [state,setState]=useState("");
/*
    useEffect(()=>{

        axios.get("http://localhost:9090/data").then(data=>{
            console.log(data);

            setState(data.data.message);
        }).catch(err=>{
            console.log(err);
        })
        
    },[])
    */


  return (
    <div>
       
       <Form/>
    </div>
  )
}

export default Home