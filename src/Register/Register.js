import axios from 'axios'
import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
export default function Register() {
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const history=useNavigate()
   //In JavaScript, async is a keyword placed before a function to allow the function to return a promise.
   async function submit(e){
     e.preventDefault()
     try{
       await axios.post("http://localhost:8000/register",{
         email,password
       }).then(res=>{
         if(res.data==="exist"){
            alert("User already exists")
         }else if(res.data==="not exist"){
            history("/")
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
         <div className="title">
            Register Form
         </div>
         <form action="#">
            <div className="field">
               <input type="text" required autoComplete="current-password" onChange={(e)=>{
                  setEmail(e.target.value)
               }} name="" id=""/>
               <label>Email Address</label>
            </div>
            <div className="field">
               <input type="password" required autoComplete="current-password" onChange={(e)=>{
            setPassword(e.target.value)
          }}  name="" id=""/>
               <label>Password</label>
            </div>
            <div className="field">
               <input type="submit" value="Register" autoComplete="current-password" onClick={submit}/>
            </div>
            <div className="signup-link">
             	Already have a Account? <Link to={"/"}>Login now</Link>
            </div>
         </form>
      </div>
      </div>
  )
}
