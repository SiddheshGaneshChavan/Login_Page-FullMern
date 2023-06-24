import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
export default function Login() {
  const history=useNavigate();
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  //axios:helps connect to the backend
  //cors:works with axios
  //In JavaScript, async is a keyword placed before 
  //a function to allow the function to return a promise.
  // powerful functions for working with asynchronous JavaScript.
  //https://i.redd.it/lpf0u9nbj7w41.jpg
  async function submit(e){
    e.preventDefault()
    try{
      //await-to wait for the request to complete before proceeding.
      //axios.post-Axios POST request being made to http://localhost:8000/. 
      //The request includes an object containing an email and password.
      await axios.post("http://localhost:8000/",{
        email,password
      }).then(res=>{
        if(res.data==="exist"){
          history("/home",{state:{id:email}})
        }else if(res.data==="not exist"){
          alert("User have not sign up")
        }
      })
      .catch(e=>{
        alert("Wrong Details")
        console.log(e)
      })
    }catch(excep){
      console.log(excep)
    }
  }
  return (
    <div className='con'>
    <div className="wrapper">
      <div className="title">Login Form</div>
      <form action="POST">
        <div className="field">
          <input type="email" required autoComplete="current-password" onChange={(e)=>{
            setEmail(e.target.value)
            //setEmail method takes value from input
          }} name="" id=""/>
          <label>Email Address</label>
        </div>
        <div className="field">
          <input type="password" required autoComplete="current-password" onChange={(e)=>{
            setPassword(e.target.value)
            //setPassword method takes value from input
          }}  name="" id=""/>
          <label>Password</label>
        </div>
        <div className="field">
          <input type="submit" value="Login" onClick={submit}/>
        </div>
        <div className="signup-link">
          Not a member? <Link to={"/register"}>Signup now</Link>
        </div>
      </form>
    </div>
    </div>
    
  )
}
