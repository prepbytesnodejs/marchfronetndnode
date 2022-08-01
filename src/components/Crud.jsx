import React,{useState,useEffect} from 'react'
import { Input } from 'antd';
import { Button ,Modal} from 'antd';
import ShowData from './ShowData';
import { Space, Table, Tag } from 'antd';
import axios from 'axios';
import config from './config';


const Crud = () => {
    const [state,setState]=useState({
        name:"",
        email:""
    })


    // for edit purpose
    
    const [editState,setEditState]=useState({
      name:"",
      email:"",
      id:""

  })





    const [isModalVisible, setIsModalVisible] = useState(false);

   const [data,setData]=useState([]); 
   const [updated,setUpdated]=useState(false);

useEffect(()=>{

  const configdata={
    headers:{
        token:localStorage.getItem("token")
    }
}

    axios.get(`${config.url}/crud`,configdata).then(response=>{
        console.log(response.data);
        setData(response.data.response)

    
    }).catch(err=>{
        console.log(err);
    })

},[updated])


 //Creating the data

 const handleChange=(event)=>{
    setState({...state,[event.target.name]:event.target.value})

 }

 const handleEditChange=(event)=>{
  setEditState({...editState,[event.target.name]:event.target.value})

}

 // modal methods
 const showModal = (row) => {
  setEditState(row);
  setIsModalVisible(true);
};

const handleOk = () => {

  // we to call the api here only


  axios.put(`${config.url}/crud`,editState).then(response=>{
    console.log(response.data);
    setUpdated(!updated);

    alert("User Edited");
    setIsModalVisible(false);  // modal gets hidden when my data is updated

    setEditState({
        name:"",
        email:""
    })
}).catch(err=>{
    console.log(err);
})
  
};

const handleCancel = () => {
  setIsModalVisible(false);
};


 const createData=()=>{

    axios.post(`${config.url}/crud`,state).then(response=>{
        console.log(response.data);
        setUpdated(!updated);

        alert("User Saved");

        setState({
            name:"",
            email:""
        })
    }).catch(err=>{
        console.log(err);
    })

 }


 const deleteData=(row)=>{
   
    axios.delete(`${config.url}/crud/${row.id}`).then(response=>{
        console.log(response.data);
        setUpdated(!updated);

        alert("User Deleted");

    }).catch(err=>{
        console.log(err);
    })

 }


    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Delete',
          key: 'delete',
          dataIndex: 'delete',
          render: (_,row) => (

            <Button danger onClick={()=>deleteData(row)}>
                Delete
            </Button>
           
          ),
        },
        {
          title: 'Edit',
          key: 'edit',
          dataIndex: 'edit',
          render: (_,row) => (

            <Button type="primary" onClick={()=>showModal(row)}>
                Edit
            </Button>
           
          ),
        },
       
      ];

    

  return (
    <div>
    <Input placeholder="Name" value={state.name} onChange={handleChange}  name='name'/><br/>

    <Input placeholder="Email" value={state.email} onChange={handleChange} name='email'  style={{marginTop:"20px"}}/><br/>

    <Button type="primary" onClick={createData} style={{marginTop:"20px"}}>Add Data</Button>


    <ShowData columns={columns} data={data} />


    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
    <Input placeholder="Name" value={editState.name} onChange={handleEditChange}  name='name'/><br/>

<Input placeholder="Email" value={editState.email} onChange={handleEditChange} name='email'  style={{marginTop:"20px"}}/><br/>
  
      </Modal>

    </div>
  )
}

export default Crud