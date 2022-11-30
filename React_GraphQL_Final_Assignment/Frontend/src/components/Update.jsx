
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


   async function getBlogs()
  {
    await axios({
      url:`http://localhost:4000/graphql`,
      method:'POST',
      data:{
        query:`query{
          getBlogDetails(blog_id:${blog_id})
          {
            blog_id,
            user_id,
            title,
            contents,
            tags,date,like,dislike,ratings,user{
              user_id,firstname,lastname,email
            },comments{
              comment_id,comments
            }
          }
        }`
      }
    }).then((response)=>
    {
      const blog=response.data.data.getBlogDetails;
      setBlogs(blog)
    }).catch(function(error){
      console.log(error)
    })
  }



async function saveBlog(e)
    {
   
      const{title,contents,tags}=blogs
      
   
      if(title===''||contents===''||tags==='')
  {

    window.alert('Please enter all the fields')
  }

  else{
        await axios({

        url:'http://localhost:4000/graphql',
        method:'POST',
        data:{
          query:`mutation{
            updateBlog(user_id:${user_id},
            blog_id:${blog_id},
            title:"${title}",
            contents:"${contents}"
            tags:"${tags}")
            {
              blog_id,
              user_id,
              title,contents,tags,date,like,dislike,ratings,user
              {
                user_id,firstname,lastname,email
                
              },
              comments{
                user_id,blog_id,comments,date
              }
              
            }
          }`
        }
       
    }).then(function (response){
        const blog =response.data.data.updateBlog
        setBlogs(blog)
       
       
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
