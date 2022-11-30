import React,{useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Home from './Home';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import {format,parseISO} from 'date-fns'
import Navbar from './Navbar';

const Comment = () => {
    
    const navigate  =  useNavigate();

    const{user_id,blog_id}=useParams()


    
    
    const[comments,setComments]=useState([])


    // let name,value


    // const handleInputs=(e)=>
    // {
    //     console.log(e)
    //     name=e.target.name
    //     value=e.target.value

    //     setComments({...comments,[name]:value})
    // }


    const [blogs, setBlogs] = useState({
      title:"",
      contents:"",
      tags:""
    })


    const[user,setUser]=useState([])
    useEffect(() => { getBlogs() ;
      getComments()}, [])
    // const date=new Date(blogs.date).toDateString().slice(3)

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
              tags,date,like,dislike,ratings,
              user
              {
                user_id,firstname,lastname,email
              }
            }
          
          }`
        }
      }).then((response)=>{
        const blog=response.data.data.getBlogDetails
        console.log(blog)
        setBlogs(blog)

      }).catch(function(error){
           console.log(error)
       })
     }

    //  useEffect(() => { getComments() }, [])
    //  const date=new Date(blogs.date).toDateString().slice(3)
 
     async function getComments () {
       await axios({
        url:'http://localhost:4000/graphql',
        method:'POST',
        data:{
          query:`query{
            getComment(blog_id:${blog_id})
            {
              comments,
              comment_id,
              date,
              users{
                user_id,
                firstname,
                lastname,
                email
               
              }
              
              
            }
          }`
        }
       }).then((response)=>{
        const comment=response.data.data.getComment
        console.log(comment)
        setComments(comment)
       }).catch(function(error){
            console.log(error)
            window.alert('Something went wrong')
        })
      }


async function addComment(e)
    {
      await axios({
        url:'http://localhost:4000/graphql',
        method:'POST',
        data:{
          query:`mutation{
            addComment(user_id:${user_id},
              blog_id:${blog_id},
              comments:"${comments.comments}")
            {
              user_id,
              blog_id,
              comments,
              comment_id,
              date,
              users
              {
                firstname,
                lastname,
                email
              },
              blogs
              {
                blog_id,
                title,
                contents,
                tags,
              date}
            }
          }`
        }
      }).then((response)=>{
        const comment=response.data.data.addComment
        setComments(comment)
        window.alert('comment added sucessfully')
      }).catch(function (error)
    {
        console.log(error)
   window.alert('Something is going wrong')
    }
)
  }
   


return(
  
    <>
    
    <Navbar/>
    <br/>
    <div className='container'>
<div className='row'>
                  <div className='col'>
                    <div className="card ">
                      <div className="card-body">
                      <div className="row">
                        <div className="col-8"><b>{blogs.title}</b></div>
                          <div className="col-1">
                            
                           </div>
                          <div className="col-1">
                            
                            </div>
                             </div>
                        
                        
                           {/* <p className='font-small form-text'>Created by {user.firstname} on 
                           {format(parseISO(blogs.date),'MMM dd,yyyy')}</p>    */}
                        <p className="card-text">{blogs.contents}</p>
                        
                          
                      </div>

                     
                    </div>

                  </div>




                </div>
                </div>
                <div className="container">
      {
        comments.length?
            comments.map(comment => {
              return (<>
                <div className='row'>
                  
                  <div className='col'>
                    <div className="card ">
                      <div className="card-body">
                      <p className='font-small form-text'>commented by {comment.users.firstname} on   {format(parseISO(comment.date),'MMM dd,yyyy')} 
                        </p>  

                        <p className="card-text">{comment.comments}</p>
                        
          </div>
          </div>
          </div>
          </div><br/>
                        
                     

              </>)


            
}
)
:<p></p>
          }
        </div>
                
                <br/><br/>






    <div>
   

    </div>
    <div className='container'>
    <div className='form-row'>
    <div className='col-lg-7 my-3 p-4'>
        <label htmlFor='comments' className='form-label'><b>Comment:</b></label><br/>
        <textarea  rows = "3" cols = "60" name='comments' id='comments' autoComplete='off' 
        placeholder='' value={comments.comments} onChange={(e)=>{setComments({...comments,comments:e.target.value})}}/>
    </div>

</div>
 <div className='form-row'>
 <div className='col-lg-7 mt-3 mb-5'>
     <button type='button' className='btn1' onClick={addComment}>Add comment</button>
 </div>
</div>
</div>
</>
)


}
export default Comment
