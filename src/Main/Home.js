import React, { useEffect } from 'react'
import './Home.css'
import {  useLocation } from 'react-router-dom'
import axios from 'axios';


function App(){
  const location=useLocation()

  useEffect(() => {
    axios.post("http://localhost:8000/home")
      .then(response => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors here
        console.log(error);
      });
  }, []);
  

  return(
    <div>
       <h1>{location.state.id}</h1>
       <h2></h2>
    </div>
  )
}

export default App;