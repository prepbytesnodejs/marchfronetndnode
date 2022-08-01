import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Crud from './components/Crud'
import {

  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login'


function App() {
 


  return (
    <div id=''>
         <Routes>
      <Route path="/crud" element={ <Crud/>}/>
      <Route path="/login" element={ <Login/>}/>
       
    </Routes>
 

    </div>
  )
}

export default App
