
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import {format,parseISO} from 'date-fns'
import { Link, useParams } from 'react-router-dom'
const Blogid = () => {

    const{blog_id}=useParams()
    console.log(blog_id)


  const [blogs, setBlogs] = useState([])
  const[user,setUser]=useState([])
  const[comments,setComments]=useState([])



  useEffect(() => { getBlogs() }, [])
const date=new Date(blogs.date).toDateString().slice(3)

console.log(date)

   const getBlogs = async() => {
   await axios.get(`http://localhost:4000/blog/${blog_id}`).then(response => {
      const data = response.data
      console.log(response.data.user)
      const user=response.data.user
      const comments=response.data.comments
console.log(comments)
      setBlogs(data)
      setUser(user)
      setComments(comments)

    }).catch(function(error){
        console.log(error)
    })
  }
 console.log(user.firstname)
  
  return (
    <>
      <Navbar />
      <div className='container'>
       
        <div className="container">
          

            
                <div className='row'>
                  <div className='col'>
                    <div className="card ">
                      <div className="card-body">
                        <h5 className="card-title">{blogs.title}</h5>
                        <p className='font-small form-text'>Created by {user.firstname} 
                         on {date}
                        </p>  
                        <p className="card-text">{blogs.contents}</p>
                            
                      </div>
                    </div>

                  </div>
                </div><br/>
                        <div className="container">
          {

            comments.map(comment => {
              return (<>
                <div className='row'>
                  <div className='col'>
                    <div className="card ">
                      <div className="card-body">
                      <p className='font-small form-text'>commented by {user.firstname} on {date}
                        </p>  

                        <p className="card-text">{comment.comments}</p>
                        
          </div>
          </div>
          </div>
          </div><br/>
                        
                     

              </>)


            })
          }
        </div>
                        
                         
                      </div>
                    </div>

                  

              


            
         
    </>
  )
}

export default Blogid
