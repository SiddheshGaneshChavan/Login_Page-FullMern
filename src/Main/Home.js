import React from 'react'
import './Home.css'
import { useLocation } from 'react-router-dom'

function App(){
  const location=useLocation()
  return(
    <div>
       <h1>{location.state.id}</h1>
    </div>
  )
}

export default App;