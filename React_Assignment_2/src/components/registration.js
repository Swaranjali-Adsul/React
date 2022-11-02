import React,{useState} from 'react'

const Registration=()=> {

  const [name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[mobileno,setMobileno]=useState("")
  const[add,setAdd]=useState("")
  const[password,setPassword]=useState("")

  

    const getFormData=(e)=>
    {
  e.preventDefault()
  console.log("Name is : "+name)
  console.log("Email is : "+email)
  console.log("Mobile No is : "+mobileno)
  console.log("Password is : "+password)
    }
  return (
    <div>
  <h1 align="center">Registration Form</h1>
      
      <form onSubmit={getFormData}>
      <div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" className="form-control" id="name" placeholder="First Name"  onChange={(e)=>{setName(e.target.value)}}/>
</div>
      <div className="mb-3">
  <label htmlFor="mailR" className="form-label">Email address</label>
  <input type="email" className="form-control" id="mailR" placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value)}}/>
</div>
<div className="mb-3">
  <label htmlFor="Mobile_No" className="form-label">Mobile No.</label>
  <input type="phone" className="form-control" id="Mobile_No" placeholder=""  onChange={(e)=>{setMobileno(e.target.value)}}/>
</div>
<div className="mb-3">
  <label htmlFor="Add" className="form-label">Address</label>
  <input type="textarea" className="form-control" id="Add" placeholder=""  onChange={(e)=>{setAdd(e.target.value)}}/>
</div>
<div className="mb-3">
  <label htmlFor="passR" className="form-label">Password</label>
  <input type="password" className="form-control" id="passR" placeholder="****"  onChange={(e)=>{setPassword(e.target.value)}}/>
</div>


<button type="submit" className="btn btn-outline-success mb-3">Register Now</button>
</form>
    </div>
  )
}

export default Registration
