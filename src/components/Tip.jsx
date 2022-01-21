import React,{useState,useEffect} from 'react'


import axios from 'axios';



const Tip = () => {



   

    const percentage=10;
    const [apiData,setApiData]=useState([])
    const [peeps,setPeeps]=useState([])
    const [sum,setTotalSum]=useState(1)
    const [state,setState]=useState({
        name:"",
        amount:"",
        type:"",
        finalTip:""
    })


    useEffect(()=>{
        debugger;

        axios.get("http://localhost:8081/getData").then(data=>{
        
      
            setApiData(data["data"])
        })
      
    },[sum])

    useEffect(()=>{
console.log("component has updated ")
      
      
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

    const deleteIt=(id)=>{

        debugger;
        axios.delete("http://localhost:8081/deleteData/"+id).then(data=>{
            console.log(data["data"]);
            setTotalSum(sum*7);
      ///  let  data2=apiData.filter(ele=>ele._id!=id)
            //setApiData(data2);
/*
            axios.get("http://localhost:8081/getData").then(data=>{
        
      
                setApiData(data["data"])
            })
            */
            
       
          // setPeeps(8888);  /// state change ---------> what it does ? ---->it does re redering
        })

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
    apiData.map((ele,i)=>(
        <li key={ele._id}> 
                  <div>
<h1>
      {ele.name}
  </h1>
  <h1>
      {ele.gender}
  </h1>

  <h1>
      {ele.company}
  </h1>
<button onClick={()=>deleteIt(ele._id)}>
    Delete
</button>
</div>

        </li>
  

    ))
}



        </div>
    )
}

export default Tip
