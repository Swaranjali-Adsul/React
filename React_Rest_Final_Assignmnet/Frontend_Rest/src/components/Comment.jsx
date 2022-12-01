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
    useEffect(() => { getBlogs() }, [])
    const date=new Date(blogs.date).toDateString().slice(3)

    const getBlogs = async() => {
      await axios.get(`http://localhost:4000/blog/${blog_id}`).then(response => {
         const data = response.data
         console.log(data)
          // console.log(data.comments)
        
          const user=response.data.user
         console.log(response.data.user)
         const comment=response.data.comments
        
         console.log(response.data.comments)
         setBlogs(data)
         setUser(user)
         setComments(comment)
   
       }).catch(function(error){
           console.log(error)
       })
     }

     useEffect(() => { getComments() }, [])
    //  const date=new Date(blogs.date).toDateString().slice(3)
 
    const getComments=async()=>{
      await axios. get(`http://localhost:4000/comment/${blog_id}`).then(response => {
        const data = response.data
       console.log(data)
       setComments(data)
  
      }).catch(function(error){
          console.log(error)
      })
    
     
        
       
      
      }




     
   

    


   
//     const addComment=async(e)=>
//     {
   

//       // const{comments}=comments
    
//       if(comments.comments==='')
//   {

//     window.alert('Please enter all the fields')
//   }

//   else{
//     axios.post(`http://localhost:4000/comment/${user_id}/${blog_id}`,{
      
//         // comments:comments.comments,
       
//     }).then(function (response){
//         //  console.log(response.data.user_id)
//         //  const user=response.data.user
//         //  console.log(response.data)
//         console.log(response.data)
//          const comments=response.data.comments
//          console.log(comments)
//         //  console.log(comments)
//         //  setUser(user)
//         // console.log(comments)
//         setComments(comments)
        
//         window.alert('Comment Added Sucessfully')
//         navigate('/Blogs')
//     }).catch(function (error)
//     {
//       console.log(error)
//    window.alert('Something is going wrong')
//     }
//     )
//   }
   
// }




const addComment=async(e)=>
    {
      axios.post(`http://localhost:4000/comment/${user_id}/${blog_id}`,{
       comments:comments.comments
       
    }).then(function (response){
      const data=response.data
        console.log(response.data)
        // console.log('user id')
        //  console.log(response.data.user.user_id)
        //  console.log('blog id')
        //  console.log(response.data.blog_id)
        
        setComments(data)
       
       
        window.alert('Comment Saved')
        // navigate(`/Navbar/${user_id}`)
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
                        
                        
                           {/* <p className='font-small form-text'>Created by {user.firstname} on {format(parseISO(blogs.date),'MMM dd,yyyy')}</p>    */}
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
                      <p className='font-small form-text'>commented by {user.firstname} on {date}
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
