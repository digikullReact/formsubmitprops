import React,{useState} from 'react'

const Tip = () => {
    const percentage=10;
    const [peeps,setPeeps]=useState([])
    const [state,setState]=useState({
        name:"",
        amount:"",
        finalTip:""
    })
    const handleChange=(event)=>{
        setState({...state,[event.target.name]:event.target.value})

    }

    const calculate=()=>{
        const finalTip=parseInt(state.amount)/10
        ///setState({...state,finalTip:finalTip})
        state.finalTip=finalTip; // mutably --->
    

        setPeeps([...peeps,state]);

    }
    return (
        <div>

            <input type="text" name='name' onChange={handleChange}/>
            <input type="number" name='amount' onChange={handleChange}/>
          <button onClick={calculate}>
          Calculate tip
          </button>
            
{
    peeps.map(ele=>(
        <div>
<h1>
      {ele.name}
  </h1>
  <h1>
      {ele.amount}
  </h1>

  <h1>
      {ele.finalTip}
  </h1>

</div>

    ))
}



        </div>
    )
}

export default Tip
