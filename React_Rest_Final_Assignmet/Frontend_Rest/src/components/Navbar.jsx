import React, { useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { useEffect } from 'react'
import axios from '../api/axios'
const Navbar = () => {

  const {user_id}=useParams()

  const [user,setUser]=useState([])


  
  useEffect(() => { getUsers() }, [])
// const date=new Date(blogs.date).toDateString().slice(3)

// console.log(date)

   const getUsers = async() => {
   await axios.get(`http://localhost:4000/auth/${user_id}`).then(response => {
    console.log(response.data.firstname)
      const user=response.data
      console.log(user)
      setUser(user)
      
    }).catch(function(error){
        console.log(error)
    })
  }

  return (
    <div>
      <div className='container'>
      <nav  className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#"> Blogging Application</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
     {/* <li className="nav-item">
          <Link className="nav-link" to={'/Home'}>Home</Link>
        </li>  */}
        
        
        <li className="nav-item">
          <Link className="nav-link" to={`/Addblog/${user_id}`}>Add Blog</Link>
        </li>
        
        {/* <li className="nav-item">
          <Link className="nav-link" to={`/Blogs/${user_id}`}>Read Blogs</Link>
        </li> */}
        {/* <li className="nav-item">
          <Link className="nav-link" to={`/Allblog/${user_id}`}>Read Blogs</Link>
        </li> */}
         <li className="nav-item">
          <Link className="nav-link" to={`/Blogs/${user_id}`}>Read Blogs</Link>
        </li>
       
        
        

        
        {/* <li className="nav-item">
          <button>Welcome {user.firstname}</button>
        </li>  */}
        
          {/* <div className="dropdown show">
  <a className="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Welcome {user.firstname}
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" >
      <Link className='nav-link' to={`/Profile/${user_id}`}>
        Create Profile
        </Link>
        </a>
    <a className="dropdown-item">
    <Link className='nav-link' to={`/Profile/${user_id}`}>
        Logout
        </Link>
    </a>
    
  </ul>
</div> */}
        <div className="dropdown">
  <button className="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Welcome {user.firstname}
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li className="dropdown-item" >
    <Link className='nav-link' to={`/Profile/${user_id}`}> Create Profile</Link></li>
        <li className="dropdown-item" >

    <Link className='nav-link' to={'/signin'}>
    Logout
        </Link></li>
   
  </ul>
</div>

       
        
        
      </ul>
    </div>
  </div>
</nav>

      </div>
    </div>
  )
}

export default Navbar
