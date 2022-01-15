import React,{useState} from 'react'

const Form = (props) => {

  const [state,setState]=useState({
    name:"",
    email:"",
    password:"",
    address:""
  })


  const handleChange=(event)=>{
    console.log(event);
    //console.log(event.target.name)
    //console.log(event.target.value);
    setState({...state,[event.target.name]:event.target.value})

  }

  const passData=()=>{
    props.getData(state);

  }
  

    return (
      <div style={{marginTop:"30px"}}>
     
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" autocomplete="off" name='email' onChange={handleChange} className="form-control" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1"  className="form-label">Password</label>
          <input type="text"  name="password" onChange={handleChange} className="form-control" />
        </div>
      
        <div className="mb-3">
          <label for="exampleInputPassword1"   className="form-label">Name</label>
          <input type="text"  name="name" onChange={handleChange} className="form-control" />
        </div>
      

        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Address</label>
          <input type="text" name="address" onChange={handleChange} className="form-control" />
        </div>
      
        
        <button type="button" className="btn btn-primary" onClick={passData}>Submit</button>
        </div>
    )
}

export default Form
