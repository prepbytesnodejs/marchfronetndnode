import axios from 'axios'
import React ,{useState,useEffect} from 'react'


const Form = () => {
    const [state,setState]=useState({
        username:"",
        password:""
    })

    const [userData,setUserdata]=useState([]);
    const [loaded,setLoaded]=useState(false);

useEffect(()=>{
    /*

    axios.get("http://localhost:9090/").then(response=>{
        setUserdata(response.data.data);
        

    }).catch(err=>{

    })
    */


},[loaded])

    const handleChange=(event)=>{
        setState({...state,[event.target.name]:event.target.value})

    }

    const submit=()=>{
        console.log(state);

        // api call with axios\\
        const config={
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
              }
        }

        axios.post("http://localhost:9090/post" ,state,config).then(response=>{
            console.log(response.data);
            setLoaded(!loaded);

        }).catch(err=>{
            console.log(err);
        })
    }


  return (
    <div >
        <div className='row' style={{marginTop:"100px"}}>
            <div className='col-md-8'>

                <input type="text" onChange={handleChange} name='username' placeholder='Username' className='form-control'/><br>
                </br>

                <input type="text"  onChange={handleChange} name='password' placeholder='Password' className='form-control'/><br>
                </br>
 
             <button className='btn btn-success' onClick={submit}>
                Submit
             </button>


            </div>

        </div>
     

{
  userData.map(ele=>(

    <li>Username - {ele.username} Password -{ele.password} </li>
  ))


}


    </div>
  )
}

export default Form