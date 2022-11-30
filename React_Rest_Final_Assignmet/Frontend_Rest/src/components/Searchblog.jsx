import { useEffect,useRef ,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import axios from 'axios'

const Searchblog = () => {

    const navigate=useNavigate()

    const errRef=useRef('')
    // const[userRef,setUserRef]=useState('')

    const[blog,setBlog]=useState({
    
        
        blogname:"",
        
        
    })

    const[errMsg,setErrMsg]=useState('')

    useEffect(()=>
    {
        setErrMsg('');
    },[blog.blogname])

    let name,value
    const handleInputs=(e)=>
    {
        console.log(e)
        name=e.target.name
        value=e.target.value

        setBlog({...blog,[name]:value})
    }


 const handleSubmit=async(e)=>
    {
        
        const{blogname}=blog

    //   const response=await fetch("http://localhost:4000/blog",
    //   {
    //     method:'GET',
    //     headers:
    //     {
    //         'Content-Type':'application/json'
    //     },
    //     param:JSON.stringify({
    //         blogname
    //     })
    //   })


    const response = await axios.get('https://localhost:4000/blog/search', { params: { blogname: blogname } });
       console.log(response.status)

      if(response.status===400)
      {
        window.alert("Missing Email or Password")
      }

      else if(response.status===401)
      {
        window.alert("Email address or Password is incorrect")
       
      }

      else if(response.status===201)
      {
        window.alert("You Logged in Successfully");
        // <Link to='/Blogs'>Register here</Link>
        // navigate(`/Navbar/${user_id}`)
      }


        
    

        
    }
    <div>
      
    </div>
  return (

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
                <form method='GET'>
                    <h1 className='font-weighted-bold py-3'>Welcome To Blog Application</h1>
                    <h4>Login into your account</h4>
                    <div className='form-row'>
                        <div className='col-lg-7 my-3 p-4'>
                            <label htmlFor='blogname' className='form-label'><b>Search</b></label><br/>
                            <input type='blogname' name='blogname' id='blogname' autoComplete='off' 
                            placeholder='Enter keywords...'  value={blog.blogname} onChange={handleInputs}
                            required="required" />
                        </div>
                    </div>

                   

                    


                        <div className='form-row'>
                        <div className='col-lg-7 mt-3 mb-5'>
                            <button type='button' className='btn1' value='details' onClick={handleSubmit}  >Read Blog</button>
                        </div>
                    </div> 

                   
                   
                </form>
            </div>

        </div>
    </div>
</section>
  )
}

export default Searchblog
