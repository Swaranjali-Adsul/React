import React,{useState} from 'react'

const Login=()=> {

  const [name,setName]=useState("")
  const[password,setPassword]=useState("")
  

    const getFormData=(e)=>
    {
  e.preventDefault()
  console.log("Name is : "+name)
  console.log("Password is : "+password)
    }
  return (
    <div>
      
        <h1 align="center">Login Form</h1>
      
      <form onSubmit={getFormData}>
      <div className="mb-3">
  <label htmlFor="mail" className="form-label">Email address</label>
  <input type="email" className="form-control" id="mail" placeholder="Enter email"  onChange={(e)=>{setName(e.target.value)}}/>
</div>
<div className="mb-3">
  <label htmlFor="pass" className="form-label">Password</label>
  <input type="password" className="form-control" id="pass" placeholder="****"  onChange={(e)=>{setPassword(e.target.value)}}/>
</div>

<button type="submit" className='btn btn-outline-success mb-3'>Login</button>
<br/><br/>
</form>
    </div>
  )
}

export default Login
