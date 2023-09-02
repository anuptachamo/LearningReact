import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import './../../styles/AllBlogs.css'
import axios from "axios"
import Button from './../../components/Button'
import { useNavigate } from 'react-router-dom'




const AllBlogs = () => {
  const navigate = useNavigate()
  const [blogs,setBlogs] = useState([])

  const fetchBlogs = async()=>{
    const response = await axios.get("https://64ee09441f872182714236fa.mockapi.io/blogs/")
    if(response.status == 200){
      console.log(response.data)
      setBlogs(response.data) 
    }
  }

  useEffect(()=>{
    fetchBlogs()
   
  },[])

  return (
    <>
    <Navbar/>
    <div>
      <h1>My Blogs</h1>
    </div>
    <div className="button-group">
        <Button className= 'addblogsbtn' text="Add Blogs" to ="/addblogs" />
      </div>
    <div style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap'}}>
        {
          blogs.map((blog)=>{
            return (
              <div className="card" key={blog.id}>
                <img src={blog.avatar} alt="Avatar"  width='100%' />
                  <div className="card-content">
                    <h4 className="card-title">{blog.title}</h4> 
                    <p className='card-description'>{blog.Description}</p> 
                    <p className="card-date">{blog.createdAt}</p>
                  </div>
                  <p onClick={()=>navigate("/singleBlogs/" + blog.id)} style={{textAlign:"center", color: "white", cursor: "pointer"}}>See More</p>
              </div>
            )
          })
        }

    </div>
    </>
  )
}

export default AllBlogs
