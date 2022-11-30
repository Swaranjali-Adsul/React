
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import {format,parseISO} from 'date-fns'
import { Link } from 'react-router-dom'
const Blogs = () => {


  const[tag,setTag]=useState({
        
    tags:"",
   
})



let name,value
    const handleInputs=(e)=>
    {
        console.log(e)
        name=e.target.name
        value=e.target.value

        setTag({...tag,[name]:value})
    }

  const [blogs, setBlogs] = useState([])
  useEffect(() => { getBlogs() }, [])

  const getBlogs = () => {
    axios.get('http://localhost:4000/blog').then(response => {
      const data = response.data
      console.log(data)
      setBlogs(data)
    })
  }

  const handleSearch=async(e)=>
  {
    console.log(tag.tags)
      await axios.post(`http://localhost:4000/blog/search/${tag.tags}`).then(response => {
         const data = response.data
      //  console.log(response.data.blogsearch)
          
       console.log(data)
         setBlogs(data)
        // console.log(blogsearch.blog_id)
   
       }).catch(function(error){
           console.log(error)
       })
     
  }

  const likes=(blog_id)=>
  {
    axios.patch(`http://localhost:4000/blog/likes/${blog_id}`).then(response => {
      const data = response.data
   //  console.log(response.data.blogsearch)
       
    console.log(data)
       setBlogs(data)
     // console.log(blogsearch.blog_id)

    }).catch(function(error){
        console.log(error)
    })
  }

  const dislikes=(blog_id)=>
  {
    axios.patch(`http://localhost:4000/blog/dislikes/${blog_id}`).then(response => {
      const data = response.data
   //  console.log(response.data.blogsearch)
       
    console.log(data)
       setBlogs(data)
     // console.log(blogsearch.blog_id)

    }).catch(function(error){
        console.log(error)
    })
  }

  const deleteBlog = (user_id,blog_id) => {
    axios.delete(`http://localhost:4000/blog/${user_id}/${blog_id}`).then(response => {
      const data = response.data
      console.log(data)
      setBlogs(data)
      // navigate('/Blogs')
     
    }).catch(function(error){
      console.log(error)
  })
  }


  
  return (
    <>
      <Navbar />
      
      <div className='container'>
     
      <div className="mb-3">
  {/* <label for="exampleFormControlInput1" className="form-label">Email address</label> */}
  <form method='POST'>
                        <h1 className='font-weighted-bold py-3'>Welcome To Blog Application</h1>
                        
                        <div className='form-row'>
                            <div className='col-lg-7 my-3 p-4'>
                            <label htmlFor='tags' className='form-label'><b>Search:</b></label><br/>
                            <input type='text' name='tags' id='tags' autoComplete='off' 
                                placeholder='Search here' value={tag.tags} onChange={handleInputs}/>
                            </div>
                        </div>
  <div className='col-lg-4 mt-3 mb-5' >

                                <button type='button' className='btn1' value='search' onClick={handleSearch}  >Search</button>
                            </div>
</form>
</div>
      </div>
      <div className='container'>
       
        <div className="container">
          {

            blogs.map(blog => {
              return (<>
                <div className='row'>
                  <div className='col'>
                    <div className="card ">
                      <div className="card-body">
                      <div className="row">
                        <div className="col-8"><b>{blog.title}</b></div>
                          <div className="col-1">
                            <b> <button src='' onClick={()=>likes(blog.blog_id)}>Like</button>
                               {blog.like}  
                              </b>
                           </div>
                          <div className="col-1">
                            <b><button onClick={()=>dislikes(blog.blog_id)}>Dislike</button>
                            {blog.dislike}  
                            </b>
                            </div>
                             </div>
                        {/* <h5 className="card-title">{blog.title}</h5>
                        <p >{blog.like}</p>
                        <p >{blog.dislike}</p> */}
                        <p className='font-small form-text'>Created by {blog.user.firstname} on {format(parseISO(blog.date),'MMM dd,yyyy')}</p>
                        <p className="card-text">{blog.contents}</p>
                        
                          
                        
                          
                          
                          


                          <div className="row">
                             <div className="col-10">
                             <Link to={`/Comment/${blog.user.user_id}/${blog.blog_id}`}>Read more..</Link> 
                             </div>
                             <div className="col-1">
                             <Link to={`/update/${blog.user.user_id}/${blog.blog_id}`}>Update</Link>  
                             </div>
                             <div className="col-1">
                             <Link to={`/Deleteblog/${blog.user.user_id}/${blog.blog_id}`}>Delete</Link>  
                             </div>
                             {/* <div className="col-1">
                             <button onClick={()=>deleteBlog(blog.user.user_id,blog.blog_id)}>Delete</button>  
                             </div> */}
                          </div>
                         {/* <button onClick={()=>delete(blog.blog_id)}>Dislike</button> */}
                      </div>
                    </div>

                  </div>
                </div><br/><br/>

              </>)


            })
          }
        </div>
      </div>

    </>
  )
}

export default Blogs
