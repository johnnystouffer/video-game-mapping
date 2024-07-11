import React from 'react'
import "./LoginButtons.css"
import { Link } from 'react-router-dom'

const LoginButton = () => {



  return (
    <Link to={'/savestate'}><button className='login-button'> Login / Sign Up </button></Link>
  )
}

export default LoginButton