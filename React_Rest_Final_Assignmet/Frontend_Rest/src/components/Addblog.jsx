import React,{useState} from 'react'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navbar from './Navbar';


const Addblog = () => {
     const navigate  =  useNavigate();

    
    const{user_id}=useParams()

    console.log(user_id)
    
 const[blog,setBlog]=useState({
        
       title:"",
       contents:"",
        tags:"",
        
    })

    // const [blogs, setBlogs] = useState([])
    // const[user,setUser]=useState([])
    // const[comments,setComments]=useState([])

    let name,value
    const handleInputs=(e)=>
    {
        console.log(e)
        name=e.target.name
        value=e.target.value

        setBlog({...blog,[name]:value})
    }

    const postData=async(e)=>
    {
      e.preventDefault()

      const{title,contents,tags}=blog

      const response=await fetch(`http://localhost:4000/blog/${user_id}`,
      {
        method:'POST',
        headers:
        {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title,contents,tags
        })
      })

      const data=await response.json();
      if(!data)
      {
        window.alert("Empty fields")
      }
      else
      {
        window.alert("Blog saved successfully")
        // Navigate('/Navbar')
        // navigate("../Signup", { replace: true });
        navigate(`/Blogs/${user_id}`)
      }
    }
  return (
    <>
    <Navbar/>
     <section className="Form 'my-4' 'mx-5'">
        <div className='container'>
            <div className='row no-gutters'>
                <div className='col-lg-5'>
                    <br/><br/><br/><br/>
                   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blogger.svg/1200px-Blogger.svg.png'              
                        className='img-fluid'
                        alt="">

                        </img>
                </div>

                <div className='col-lg-7 px-5 pt-5'>
                    <form method='POST'>
                        <h1 className='font-weighted-bold py-3'>Welcome To Blog Application</h1>
                        <h4>Happy Blogging...Write your blog here</h4>

                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                            
                            <label htmlFor='title' className='form-label'><b>Blog Title:</b></label><br/>
                            <textarea type='text' rows = "2" cols = "60" name='title' id='title' autoComplete='off' 
                                placeholder='' value={blog.title} onChange={handleInputs}
                                
                                />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                            <label htmlFor='contents' className='form-label'><b>Blog Contents:</b></label><br/>
                            <textarea type='text' rows = "7" cols = "60" name='contents' id='contents' autoComplete='off' 
                                placeholder='' value={blog.contents} onChange={handleInputs}/>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                                <label htmlFor='tags' className='form-label'><b>Tags:</b></label><br/>
                                <textarea type='text' rows = "3" cols = "60" name='tags' id='tags' autoComplete='off' 
                                placeholder='' value={blog.tags} onChange={handleInputs}/>
                            </div>
                        </div>

                        
                        <div className='form-row'>
                            <div className='col-lg-7 mt-3 mb-5'>
                                <button type='button' className='btn1' onClick={postData}>Save Blog</button>
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

export default Addblog
