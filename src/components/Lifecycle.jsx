import React ,{useEffect,useState}from 'react'

const Lifecycle = () => {
    const  [state,setState]=useState(9);


    useEffect(() => {

   
        console.log("Updation Phase")
     
    })
//18
    const handleClick=()=>{
       // debugger;

       // state change happens asynchronously
      setState(state+1) // {name:"something"}  //9

       setTimeout(()=>{
        setState(state+8) // {age:20,name:"Something"}  //9

       },9000)


    }
/*
useEffect(() => {

    /// the apis from backend
    console.log("Mounted Phase")
 
}, [])


useEffect(() => {

    console.log("Updation Phase")
 
})

useEffect(() => {

    return () => {
        console.log("Unmounting  Phase")

    }
}, [])
*/
    //  --There are different phases of lifecycle 

    //  1-componentDidmount  --mounting phase
    //  2-  updating /updation phase 
    // 3- unmounting phase  --->
    return (
        <div>
            <h1>Hello{state}</h1>
            
            <button onClick={handleClick}>
           Click Me
            </button>
            
        </div>
    )
}

export default Lifecycle
