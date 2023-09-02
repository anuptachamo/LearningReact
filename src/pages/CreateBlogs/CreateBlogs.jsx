import React, { useState } from 'react'
import './../../styles/CreateBlogs.css'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlogs = () => {
  const navigate = useNavigate()  // page refresh nagari load garna navigate use garxa
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  // console.log(title, "Title")
  // console.log(description, "Description")
  // console.log(image, "Image")

  const createBlog = async (e)=>{
    e.preventDefault()
    const data = {
      title : title,    //mockapi ma j lekheko xa teii lekhnu parxa 
      Description : description,
      avatar : image
    }
    const response = await axios.post("https://64ee09441f872182714236fa.mockapi.io/blogs/",data)
    if(response.status ==201){
      // window.location.href = "/"
      navigate("/allblogs/")
    }else{
      alert("Something went wrong")
    }
    // console.log(response)
  }

  return (
    <>
    <Navbar/>
      <div className="container">
        <h1>Add Blogs</h1>
        {/* createBlog line number 15 bata define vako ho */}
        <form onSubmit={createBlog}>   
            <div className="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" placeholder='Your title name' name="title" required onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="description">Description:</label>
                <textarea id="description" placeholder='Your description' name="Description" required onChange={(e)=>setDescription(e.target.value)}></textarea>
            </div>
            <div className="form-group">
                <label for="image">Image:</label>
                <input type="text" id="image" placeholder='Your Image' name="avatar" required onChange={(e)=>setImage(e.target.value)}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    </>
  )
}

export default CreateBlogs
