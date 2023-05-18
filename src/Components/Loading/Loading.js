import React from 'react'
import { ClipLoader } from 'react-spinners'
import { Link } from 'react-router-dom'
import './Loading.css'
function Loading(props) {
  return (
    <div className='login-container'>
          <h6>Not Logged In.. Please Login</h6>
          <Link to={`/${props.path}/login`} className="login-btn">Login</Link>
    </div>
  )
}

export default Loading