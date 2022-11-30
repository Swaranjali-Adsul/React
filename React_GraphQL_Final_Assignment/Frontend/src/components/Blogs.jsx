
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

  async function getBlogs()
  {
    await axios({
      url:`http://localhost:4000/graphql`,
      method:'POST',
      data:
      {
        query:`query{
          getBlogs{
            blog_id,title,contents,tags,like,dislike,date
            user{
              user_id,firstname,lastname,email
            }
          }
        }`
      }
    }).then((response)=>{
      const blog=response.data.data.getBlogs;
      console.log(blog)
      setBlogs(blog)
    }).catch(function(error){
      console.log(error)
      window.alert('Blogs not Found!!')
    })
  }

  const handleSearch=async(e)=>
  {
    // const{tags}=tags
    await axios({
      url:'http://localhost:4000/graphql',
      method:'POST',
      data:{
        query:`query{
          search(tags:"${tag.tags}")
          {
           blog_id,
            user_id,title,contents,tags,date,like,dislike,ratings,
            user{
              user_id,
              firstname,
              lastname,email
            }
          }
        }`

      }
    }).then((response)=>
    {
      console.log(response)
      const blog=response.data.data.search;
      console.log(blog)
      setBlogs(blog)
    }).catch(function(error){
      window.alert('Blogs not found')
    })
  }

  async function likes(blog_id)
  {
    await axios({
      url:'http://localhost:4000/graphql',
      method:'POST',
      data:{
        query:`mutation{
          likes(blog_id:${blog_id})
          {
            blog_id,
            user_id,
            title,
            contents,
            tags,
            like,
            dislike,
            ratings,
            date
            user{
              user_id,
              firstname,
              lastname,
              email
            }
          }
        }`
      }
    }).then((response)=>{
        const blog=response.data.data.likes
        setBlogs(blog)
      }).catch(function(error){
        console.log(error)
        window.alert('something went wrong')
      })

 

}

  async function dislikes(blog_id)
  {
    await axios({
      url:'http://localhost:4000/graphql',
      method:'POST',
      data:{
        query:`mutation{
          dislikes(blog_id:${blog_id})
          {
            blog_id,
            user_id,
            title,
            contents,
            tags,
            like,
            dislike,
            ratings,
            date,
            user{
              user_id,
              firstname,
              lastname,
              email
            }
          }
        }`
      }
    }).then((response)=>{
        const blog=response.data.data.dislikes
        setBlogs(blog)
      }).catch(function(error){
        console.log(error)
        window.alert('something went wrong')
      })
    
  }

  async function deleteBlog(user_id,blog_id) 
   {

    await axios({
      url:'http://localhost:4000/graphql',
      method:'POST',
      data:{
        query:`mutation{
          deleteBlog(user_id:${user_id},
            blog_id:${blog_id})
            {
              blog_id,
              user_id,
              title,
              contents,
              tags,
              date,
              like,
              dislike,
              ratings,
              user{
                user_id,
                firstname,
                lastname,
                email,
                city,
                state,
                country,
                pcode,
                dob,
                gender
                
              }
            }
        }`
      }
    }).then((response)=>{
        const blog=response.data.data.deleteBlog
        console.log(blog)
        setBlogs(blog)
      }).catch(function(error){
        console.log(error)
        window.alert('something went wrong')
      })




  //     async function updateBlog(user_id,blog_id) 
  //     {
    
  //      await axios({
  //        url:'http://localhost:4000/graphql',
  //        method:'POST',
  //        data:{
  //          query:`mutation{
  //           updateBlog(user_id:"${user_id}",
  //           blog_id:"${blog_id}",
  //           title:"${title}",
  //           contents:"${contents}"
  //           tags:"${tags})"
  //           {
  //             blog_id,
  //             user_id,
  //             title,contents,tags,date,like,dislike,ratings,
  //             user
  //             {
  //               user_id,firstname,lastname,email
                
  //             },
  //             comments{
  //               user_id,blog_id,comments,date
  //             }
              
  //           }
  //         }`
  //        }
  //      }).then((response)=>{
  //          const blog=response.data.data.updateBlog
  //          console.log(blog)
  //          setBlogs(blog)
  //        }).catch(function(error){
  //          console.log(error)
  //          window.alert('something went wrong')
  //        })
    
  // }

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
                        <p className='font-small form-text'>Created by {blog.user.firstname} on
                          {format(parseISO(blog.date),'MMM dd,yyyy')} 
                         </p>
                        <p className="card-text">{blog.contents}</p>
                        
                          
                        
                          
                          
                          


                          <div className="row">
                             <div className="col-10">
                             <Link to={`/Comment/${blog.user.user_id}/${blog.blog_id}`}>Read more..</Link> 
                             </div>
                             <div className="col-1">
                             <Link to={`/update/${blog.user.user_id}/${blog.blog_id}`}>Update</Link>   
                             {/* <button onClick={()=>updateBlog(blog.user.user_id,blog.blog_id)}>Update</button> */}

                             </div>
                             <div className="col-1">
                             {/* <Link to={`/Deleteblog/${blog.user.user_id}/${blog.blog_id}`}>Delete</Link>   */}
                             <button onClick={()=>deleteBlog(blog.user.user_id,blog.blog_id)}>Delete</button>
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
