import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home'
import Lifecycle from './components/Lifecycle'
import Api from './components/Api'
import Tip from './components/Tip'

function App() {
  const [data, setData] = useState(true)


  const getData=(obj)=>{
    setData(false);

  }

  return (
    <div className="container">


  <div class="row">
  <Header/>
<div class="col-md-6 offset-3">
  {/**
   *   <Login  getData={getData}/>
   */}

{/**<Lifecycle/>    <Api/>*/}
  
<Tip/>

    </div>
   
  </div>


  <div class="row">


   
  </div>

    
    
    </div>
  )
}

export default App
