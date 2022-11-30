
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import {format,parseISO} from 'date-fns'
import { Link } from 'react-router-dom'


const Allblog = () => {


 




  const [blogs, setBlogs] = useState([])
  useEffect(() => { getBlogs() }, [])

  const getBlogs = () => {
    axios.get('http://localhost:4000/blog').then(response => {
      const data = response.data
      console.log(response.data)
      setBlogs(data)
    })
  }

  

  
  
  
  return (
    <>
      <Navbar />
      
      <div className='container'>
     
      <div className="mb-3">
  <form method='POST'>
                        <h1 className='font-weighted-bold py-3'>Welcome To Blog Application</h1>
                        
                        
  <div className='col-lg-4 mt-3 mb-5' >

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
                          {/* <div className="col-1">
                            <b> <button src='' onClick={()=>likes(blog.blog_id)}>Like</button>
                               {blog.like}  
                              </b>
                           </div>
                          <div className="col-1">
                            <b><button onClick={()=>dislikes(blog.blog_id)}>Dislike</button>
                            {blog.dislike}  
                            </b>
                            </div> */}
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
                          </div>
                         
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

export default Allblog
