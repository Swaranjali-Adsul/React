import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Blogs from './Blogs'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from '../api/axios'

const Deleteblog = () => {
    const navigate=useNavigate()
    const{user_id,blog_id}=useParams()

    

const [blogs, setBlogs] = useState([])
  useEffect(() => { deleteBlogs() }, [])

  const deleteBlogs = () => {
    axios.delete(`http://localhost:4000/blog/${user_id}/${blog_id}`).then(response => {
      const data = response.data
      console.log(data)
      setBlogs(data)
      // window.alert('Blog Deleted...')
      navigate(`/Blogs/${user_id}`)
     
    })
  }

  return (
    <div>
      
     
    </div>
  )
}

export default Deleteblog
