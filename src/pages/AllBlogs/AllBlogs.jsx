import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import './../../styles/AllBlogs.css'
import axios from "axios"



const AllBlogs = () => {
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
    {/* <div>
      <h1>My Blogs</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente vitae eum suscipit, voluptates officia aut voluptas laboriosam accusantium, eos sint atque quo placeat quaerat nam est nesciunt minus soluta in.
      Obcaecati iste voluptatibus vel commodi corporis repellat culpa maiores impedit eum sit. Illo neque veniam tempore reprehenderit sint inventore, eius quo molestias quod eaque dolorem officiis soluta libero aspernatur? Quam.
      Reiciendis, vero deserunt sed explicabo id quibusdam? Quisquam, eveniet sint neque repellat aperiam delectus velit omnis, blanditiis totam porro ducimus doloremque assumenda, maxime et provident rem molestias vitae recusandae corrupti.</p>
    </div> */}

    <div style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap'}}>
        {
          blogs.map((blog)=>{
            return (
              <div className="card" key={blog.id}>
                <img src={blog.avatar} alt="Avatar"  width='100%' />
                  <div className="container">
                    <h4><b>{blog.title}</b></h4> 
                    <p style={{color:"red"}}>{blog.Description}</p> 
                    <p>{blog.createdAt}</p>
                  </div>
              </div>
            )
          })
        }

    </div>
    </>
  )
}

export default AllBlogs
