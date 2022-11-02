import React,{useState} from 'react'
import { useSelector } from 'react-redux'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import { showUsers } from '../features/hotels/registerSlice'
import Navbar from './Navbar'
import userNavbar from './User_navbar'
import Home from './Home'


export default function Login() {
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const navigate=useNavigate()
const users=useSelector(showUsers)
console.log(users)

const logData=users.filter(user=>user.emailr===email && user.passr===pass)
console.log(logData)
  const  login=(e)=>
    {
      e.preventDefault()

      if(email==='hotel@gmail.com' && pass==='hotel123')
      {

        alert("You logged in succesfully")
        navigate('/Navbar')


      }
      else if(logData)
      {
        alert("you logged for user")
          navigate('/User_navbar')
       }
      
        
    }
  return (
<>
    <Home/>
      <section>
     <div className="container">
      
      <div className="mb-3">
  <label htmlFor="mail" className="form-label">Email address</label>
  <input type="email" className="form-control" id="mail" placeholder="abc@gmail.com" onChange={(e)=>{setEmail(e.target.value)}}/>
</div>
<div className="mb-3">
  <label htmlFor="pass" className="form-label">Password</label>
  <input type="password" className="form-control" id="pass" placeholder="****" onChange={(e)=>{setPass(e.target.value)}}/>
</div>

<input className="btn btn-primary" type="submit" value="Login" onClick={login}></input>
    </div> 
      
    </section>
    </>
  )
}
