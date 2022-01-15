import React,{useState,useEffect} from 'react'

const Api = () => {
    const [state,setState]=useState([]);

useEffect(function(){

    fetch('https://newsapi.org/v2/everything?q=apple&from=2021-12-18&to=2021-12-18&sortBy=popularity&apiKey=d0c699b779ac4b3097a0da9ed8caae13')
  .then(response => response.json())
  .then(json => setState(json.articles))

// api calls ------>  url that provides you data
 

},[])  // dependency array

    return (
        <div>
            {
           state.map(ele=>(

            <li>{ele.title}</li>

           ))



            }

        
            
        </div>
    )
}

export default Api