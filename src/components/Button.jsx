// import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Button.css';
const Button = ({text, to}) => {
  return (
    <>
    <Link to = {to}className='btn'>
      {text}
    </Link>
    </>
  )
}

export default Button
