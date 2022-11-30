
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

import {format,parseISO} from 'date-fns'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Blogs from './Blogs'
const Update = () => {


    const navigate=useNavigate()
    const{user_id,blog_id}=useParams()
    console.log(user_id)
    console.log(blog_id)


  const [blogs, setBlogs] = useState({
    title:"",
    contents:"",
    tags:""
  })


let name,value
const handleInputs=(e)=>
{
    console.log(e)
    name=e.target.name
    value=e.target.value

    setBlogs({...blogs,[name]:value})
}


  useEffect(() => { getBlogs() }, [])


   const getBlogs = async() => {
   await axios.get(`http://localhost:4000/blog/${blog_id}`).then(response => {
      const data = response.data
   
console.log(response.data)
      setBlogs(data)
    

    }).catch(function(error){
        console.log(error)
    })
  }



const saveBlog=async(e)=>
    {
   
      const{title,contents,tags}=blogs
      
   
      if(title===''||contents===''||tags==='')
  {

    window.alert('Please enter all the fields')
  }

  else{
    axios.put(`http://localhost:4000/blog/${user_id}/${blog_id}`,{
        title:blogs.title,
        contents:blogs.contents,
        tags:blogs.tags
       
    }).then(function (response){
        console.log(response.data)
        console.log('user id')
         console.log(response.data.user.user_id)
         console.log('blog id')
         console.log(response.data.blog_id)
        
        setBlogs('')
       
       
        window.alert('Blog Updated Sucessfully')
        navigate(`/Blogs/${user_id}`)
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
                                placeholder='' value={blogs.title} onChange={handleInputs}
                                
                                />
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                            <label htmlFor='contents' className='form-label'><b>Blog Contents:</b></label><br/>
                            <textarea type='text' rows = "7" cols = "60" name='contents' id='contents' autoComplete='off' 
                                placeholder='' value={blogs.contents} onChange={handleInputs}/>
                            </div>
                        </div>
                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                                <label htmlFor='tags' className='form-label'><b>Tags:</b></label><br/>
                                <textarea type='text' rows = "3" cols = "60" name='tags' id='tags' autoComplete='off' 
                                placeholder='' value={blogs.tags} onChange={handleInputs}/>
                            </div>
                        </div>

                       
                        <div className='form-row'>
                            <div className='col-lg-7 mt-3 mb-5'>
                                <button type='button' className='btn1' onClick={saveBlog}>Update Blog</button>
                            </div>
                        </div> 
                       


                       
                       
                    </form>
                </div>

            </div>
        </div>
    </section>

                  

              


            
         
    </>
  )
}

export default Update
