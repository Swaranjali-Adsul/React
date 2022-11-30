import React, { useState,useEffect,useRef,useContext} from 'react'
import axios from '../api/axios'
import Authcontext, { AuthProvider } from '../context/AuthProvider'
import Home from './Home'
import { Link ,useNavigate} from 'react-router-dom'
import Blogs from './Blogs'



const LOGIN_URL='/auth/signup'


const Signin = () => {
    const navigate=useNavigate()

    // const errRef=useRef('')
    // const[userRef,setUserRef]=useState('')

    const[user,setUser]=useState({
    
        
        email:"",
        password:"",
        
    })

    // const [user,setUser]=useState([])
    // const[errMsg,setErrMsg]=useState('')

    // useEffect(()=>
    // {
    //     setErrMsg('');
    // },[user.email,user.password])

    let name,value
    const handleInputs=(e)=>
    {
        console.log(e)
        name=e.target.name
        value=e.target.value

        setUser({...user,[name]:value})
    }


 const handleSubmit=async(e)=>
    {
        
        const{email,password}=user

    
  if(user.email==='' || user.password==='')
  {

    window.alert('Please enter all the fields')
  }

  else{
    axios.post('http://localhost:4000/auth/signin',{
        email:user.email,
        password:user.password,
    }).then(function (response){
        console.log(response.data.user_id)
        const user_id=response.data.user_id
        const userData=response.data
        setUser('')
        window.alert('you logged in successfully')
        navigate(`/Navbar/${user_id}`)
    }).catch(function (error)
    {
   window.alert('Email or Passowrd is incorrect')
    }
    )
  }

   



        
    

        
    }
        
       
    



  return (
    
    <>
    <Home/>
    
     <title>Welcome to Blogging Application</title>
    <section className="Form 'my-4' 'mx-5'">
        <p aria-live="assertive"></p>
        <div className='container'>
            <div className='row no-gutters'>
                <div className='col-lg-5'>
                   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blogger.svg/1200px-Blogger.svg.png'              
                        className='img-fluid'
                        alt="">

                        </img>
                </div>

                <div className='col-lg-7 px-5 pt-5'>
                    {/* <form method='GET'> */}
                    {/* <form onSubmit={handleSubmit}> */}
                    <form method='GET'>
                        <h1 className='font-weighted-bold py-3'>Welcome To Blog Application</h1>
                        <h4>Login into your account</h4>
                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                                <label htmlFor='email' className='form-label'><b>Email address:</b></label><br/>
                                <input type='email' name='email' id='email' autoComplete='off' 
                                placeholder='Email address'  value={user.email} onChange={handleInputs}
                                required="required" />
                            </div>
                        </div>

                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                            <label htmlFor='password' className='form-label'><b>Password:</b></label><br/>
                            <input type='password' name='password' id='password' autoComplete='off' 
                                placeholder='******' value={user.password} onChange={handleInputs}
                                required="required" />
                            </div>
                        </div>

                        <p>
                            Don't have an account ?
                            {/* <a href="#">Register here</a> */}
                            <Link to='/signup'>Register here</Link>
                        </p>


                            <div className='form-row'>
                            <div className='col-lg-7 mt-3 mb-5'>
                                <button type='button' className='btn1' value='login' onClick={handleSubmit}  >Login</button>
                            </div>
                        </div> 

                        {/* <div className='form-row'>
                            <div className='col-lg-7 mt-3 mb-5'>
                                <button type='button' className='btn1' value='Register' onClick={Login} >Login</button>
                            </div>
                        </div> */}
                        {/* <div className='form-group form-button'> 
                                <input type='submit' name='signin' id='signin' 
                                className='form-submit' value='Login' onClick={Login}/>
                            </div> */}
                       
                    </form>
                </div>

            </div>
        </div>
    </section>
    {/* )} */}
    </>
  )
}

export default Signin
