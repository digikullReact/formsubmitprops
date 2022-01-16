import React,{useState} from 'react'

const Tip = () => {
    const percentage=10;
    const [peeps,setPeeps]=useState([])
    const [sum,setTotalSum]=useState(0)
    const [state,setState]=useState({
        name:"",
        amount:"",
        type:"",
        finalTip:""
    })
    const handleChange=(event)=>{
        setState({...state,[event.target.name]:event.target.value})

    }

    const getTipamount=(service)=>{

        switch (service) {
            case "excellent":
                return 10
                
                break;
        
            default:
                break;
        }

    }

    const calculate=()=>{
        
        const finalTip=parseInt(state.amount)/10  //getTipamount(state.type)
        ///setState({...state,finalTip:finalTip})
        state.finalTip=finalTip; // mutably --->
        setTotalSum(sum+finalTip);
    

        setPeeps([...peeps,state]);

    }
    return (
        <div>
  <h1>Total sum:{sum}</h1>
            <input type="text" name='name' onChange={handleChange}/>
            <input type="number" name='amount' onChange={handleChange}/>

            <select  onChange={handleChange}>

            </select>
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
