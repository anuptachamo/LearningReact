import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/> }/>
            <Route path='/about' element={<h1>About</h1> }/>
            <Route path='/contact' element={<h1>Contact</h1> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
