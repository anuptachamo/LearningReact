import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Learnmore from './pages/Learnmore'

import AllBlogs from './pages/AllBlogs/AllBlogs'
import SingleBlogs from './pages/SingleBlogs/SingleBlogs'
import CreateBlogs from './pages/CreateBlogs/CreateBlogs'
import EditBlogs from './pages/EditBlogs/EditBlogs'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/> }/>
            {/* <Route path='/about' element={<About/>}/> */}
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/learnmore' element={<Learnmore/>}/>



            <Route path='/allblogs' element={<AllBlogs/>}/>
            <Route path='/singleBlogs' element={<SingleBlogs/>}/>
            <Route path='/createBlogs' element={<CreateBlogs/>}/>
            <Route path='/editBlogs' element={<EditBlogs/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
