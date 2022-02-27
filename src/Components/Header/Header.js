import React from 'react'
import "./Header.css"
function Header(props) {
  return (
    <div className='Header'>
        <h5>{props.header}</h5>
    </div>
  )
}

export default Header