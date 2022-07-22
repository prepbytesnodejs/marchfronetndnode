import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Home = () => {
    const [state,setState]=useState("");

    useEffect(()=>{

        axios.get("http://localhost:9090/data").then(data=>{
            console.log(data);

            setState(data.data.message);
        }).catch(err=>{
            console.log(err);
        })
        
    },[])


  return (
    <div>
        <h1>Home Component {state} </h1>
    </div>
  )
}

export default Home