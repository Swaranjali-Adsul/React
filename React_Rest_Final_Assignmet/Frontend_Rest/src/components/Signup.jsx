import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import Home from './Home';
import { Link } from 'react-router-dom';

const Signup = () => {
     const navigate  =  useNavigate();

    const[user,setUser]=useState({
        
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    let name,value
    const handleInputs=(e)=>
    {
        console.log(e)
        name=e.target.name
        value=e.target.value

        setUser({...user,[name]:value})
    }

    const postData=async(e)=>
    {
      e.preventDefault()

      const{firstname,lastname,email,password,confirmpassword}=user

      const response=await fetch("http://localhost:4000/auth/signup",
      {
        method:'POST',
        headers:
        {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            firstname,lastname,email,password,confirmpassword
        })
      })

      const data=await response.json();
      if(!data)
      {
        window.alert("Empty fields")
      }
      else if(user.password===user.confirmpassword)
      {
        window.alert("you registered successfully")
        // navigate("../Signup", { replace: true });
        navigate('/signin')
      }

      else{
        window.alert("Password and Confirm Password is not same")
      }
    }
  return (
    <>
    <Home/>
    <section className="Form 'my-4' 'mx-5'">
        <div className='container'>
            <div className='row no-gutters'>
                <div className='col-lg-5'>
                   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blogger.svg/1200px-Blogger.svg.png'              
                        className='img-fluid'
                        alt="">

                        </img>
                </div>

                <div className='col-lg-7 px-5 pt-5'>
                    <form method='POST'>
                        <h1 className='font-weighted-bold py-3'>Welcome To Blog Application</h1>
                        <h4>Register here...</h4>
                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                            <label htmlFor='firstname' className='form-label'><b>First Name:</b></label><br/>
                            <input type='text' name='firstname' id='firstname' autoComplete='off' 
                                placeholder='First Name' value={user.firstname} onChange={handleInputs}/>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                            <label htmlFor='lastname' className='form-label'><b>Last Name:</b></label><br/>
                            <input type='text' name='lastname' id='lastname' autoComplete='off' 
                                placeholder='Last Name' value={user.lastname} onChange={handleInputs}/>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                                <label htmlFor='email' className='form-label'><b>Email address:</b></label><br/>
                                <input type='email' name='email' id='email' autoComplete='off' 
                                placeholder='Email address' value={user.email} onChange={handleInputs}/>
                            </div>
                        </div>

                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                            <label htmlFor='password' className='form-label'><b>Password:</b></label><br/>
                            <input type='password' name='password' id='password' autoComplete='off' 
                                placeholder='******' value={user.password} onChange={handleInputs}/>
                            </div>
                        </div>


                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                            <label htmlFor='confirmpassword' className='form-label'><b>Confirm Password:</b></label><br/>
                            <input type='password' name='confirmpassword' id='confirmpassword' autoComplete='off' 
                                placeholder='******' value={user.confirmpassword} onChange={handleInputs}/>
                            </div>
                        </div>

                       
                        
                        

                        <p>
                            Already have an account ?
                            {/* <a href="#">Login here</a> */}
                            <Link to='/signin'>Login here</Link>
                        </p>
                        <div className='form-row'>
                            <div className='col-lg-7 mt-3 mb-5'>
                                <button type='button' className='btn1' onClick={postData}>Register</button>
                            </div>
                        </div>
                        {/* <div className='form-group form-button'> 
                                <input type='submit' name='signin' id='signin' 
                                className='form-submit' value='Register Now' onClick={postData}/>
                            </div> */}


                       
                       
                    </form>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Signup
