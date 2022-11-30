
 import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Navbar from './Navbar'


import {format,parseISO} from 'date-fns'
import { Link, useNavigate, useParams } from 'react-router-dom'




// console.log(user_id)
// console.log(blog_id)
// import users from './blog/users'
const Profile = () => {
    const navigate=useNavigate()
    const{user_id,blog_id}=useParams()
   


  const [users, setUsers] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    city:"",
    state:"",
    country:"",
    pcode:"",
    dob:"",
    gender:""
  })


let name,value
const handleInputs=(e)=>
{
    console.log(e)
    name=e.target.name
    value=e.target.value

    setUsers({...users,[name]:value})
}


  useEffect(() => { getUsers() }, [])


   const getUsers = async() => {
   await axios.get(`http://localhost:4000/auth/${user_id}`).then(response => {
      const data = response.data
   
console.log(response.data)
      setUsers(data)
    

    }).catch(function(error){
        console.log(error)
    })
  }



const saveUser=async(e)=>
    {
   
        const{firstname,lastname,email,password,city,state,country,pcode,dob,gender}=users
      
   
      if(firstname===''||lastname===''||email===''||password===''||city===''||country===''||pcode===''||dob===''||gender==='')
  {

    window.alert('Please enter all the fields')
  }

  else{
    axios.put(`http://localhost:4000/auth/${user_id}`,{
        firstname:users.firstname,
        lastname:users.lastname,
        email:users.email,
        password:users.password,
        lastname:users.lastname,
        city:users.city,
        country:users.country,
        pcode:users.pcode,
        dob:users.dob,
        gender:users.gender
       
    }).then(function (response){
        console.log(response.data)
        // console.log('user id')
        //  console.log(response.data.user.user_id)
        //  console.log('blog id')
        //  console.log(response.data.blog_id)
        
        setUsers('')
       
       
        window.alert('Profile Updated Sucessfully')
        navigate(`/Navbar/${user_id}`)
    }).catch(function (error)
    {
        console.log(error)
   window.alert('Something is going wrong')
    }
    )
  }
   
}

  
  return (
    <>
      <Navbar />
      <section className="Form 'my-4' 'mx-5'">
        <div className='container'>
            <div className='row no-gutters'>
                <div className='col-lg-3'>
                   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blogger.svg/1200px-Blogger.svg.png'              
                        className='img-fluid'
                        alt="">

                        </img>
                </div>

                <div className='col-lg-7 px-5 pt-5'>
                    <form method='POST'>
                        <h1 className='font-weighted-bold py-3'>Welcome To Blog Application</h1>
                        <h4>Add your information...</h4>

                        <div className='row g-3'>
                            <div className='col-5'>
                            <label htmlFor='firstname' className='form-label'><b>First Name:</b></label><br/>
                            <input type='text' name='firstname' id='firstname' autoComplete='off' 
                                placeholder='First Name' value={users.firstname} onChange={handleInputs}/>
                            </div>

                            <div className='col-5'>
                            <label htmlFor='lastname' className='form-label'><b>Last Name:</b></label><br/>
                            <input type='text' name='lastname' id='lastname' autoComplete='off' 
                                placeholder='Last Name' value={users.lastname} onChange={handleInputs}/>
                            </div>
                        </div>
                    
                        

                        <div className='row g-3'>
                            <div className='col-5'>
                                <label htmlFor='email' className='form-label'><b>Email address:</b></label><br/>
                                <input type='email' name='email' id='email' autoComplete='off' 
                                placeholder='Email address' value={users.email} onChange={handleInputs}/>
                            </div>
                       

                        
                            <div className='col-5'>
                            <label htmlFor='password' className='form-label'><b>Password:</b></label><br/>
                            <input type='password' name='password' id='password' autoComplete='off' 
                                placeholder='******' value={users.password} onChange={handleInputs}/>
                            </div>
                            </div>


                        
                        <div className='row g-3'>
                            <div className='col-5'>
                            <label htmlFor='city' className='form-label'><b>City:</b></label><br/>
                            <input type='text' name='city' id='city' autoComplete='off' 
                                placeholder='' value={users.city} onChange={handleInputs}/>
                            </div>
                            <div className='col-5'>
                            <label htmlFor='state' className='form-label'><b>State:</b></label><br/>
                            <input type='text' name='state' id='state' autoComplete='off' 
                                placeholder='' value={users.state} onChange={handleInputs}/>
                            </div>
                            </div>
                        
                        <div className='row g-3'>
                            <div className='col-5'>
                            <label htmlFor='country' className='form-label'><b>Country:</b></label><br/>
                            <input type='text' name='country' id='country' autoComplete='off' 
                                placeholder='' value={users.country} onChange={handleInputs}/>
                            </div>
                        
                       
                            <div className='col-5'>
                            <label htmlFor='pcode' className='form-label'><b>Postal code:</b></label><br/>
                            <input type='text' name='pcode' id='pcode' autoComplete='off' 
                                placeholder='' value={users.pcode} onChange={handleInputs}/>
                            </div>
                        </div>


                        <div className='row g-3'>
                            <div className='col-5'>
                            <label htmlFor='dob' className='form-label'><b>Date of Birth:</b></label><br/>
                            <input type='text' name='dob' id='dob' autoComplete='off' 
                                placeholder='yyyy-mm-dd' value={users.dob} onChange={handleInputs}/>
                            </div>
                        
                        
                            <div className='col-5'>
                            <label htmlFor='gender' className='form-label'><b>Gender:</b></label><br/>
                            <input type='text' name='gender' id='gender' autoComplete='off' 
                                placeholder='' value={users.gender} onChange={handleInputs}/>
                            </div>
                        </div>

                       
                        
                        

                        <p>
                            {/* Already have an account ? */}
                            {/* <a href="#">Login here</a> */}
                            {/* <Link to='/signin'>Login here</Link> */}
                        </p>
                         <div className='form-row'>
                            <div className='col-lg-7 mt-3 mb-5'>
                                <button type='button' className='btn1' onClick={saveUser}>Create Profile</button>
                            </div>
                        </div> 
                        {/* <div className='form-group form-button'> 
                                <input type='submit' name='signin' id='signin' 
                                className='form-submit' value='Register Now' onClick={postData}/>
                            </div> */}


                       
                       
                    </form>
                </div>
</div></div>
    </section>

                  

              


            
         
    </>
  )
}

export default Profile
