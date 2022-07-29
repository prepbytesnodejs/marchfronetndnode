import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Crud from './components/Crud'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div id=''>
 
 <Crud/>
    </div>
  )
}

export default App
