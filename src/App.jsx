import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [data, setData] = useState({})


  const getData=(obj)=>{
    setData(obj);

  }

  return (
    <div className="container">


  <div class="row">
  <Header/>
<div class="col-md-6 offset-3">
    <Login  getData={getData}/>
    </div>
   
  </div>


  <div class="row">

<div class="col-md-6 offset-3">
   <Home data={data}/>
    </div>
   
  </div>

    
    
    </div>
  )
}

export default App
