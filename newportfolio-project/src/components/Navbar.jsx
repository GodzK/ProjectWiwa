import React from 'react'
import "./Navbar.css"
function navbar() {
  return (
    <nav>
      <div className='logo'>
         <a href="">Logo</a>
      </div>
      <div className='links'>
        <ul>
        <li>HOME</li>
        <li>DETAIL</li>
        <li>FUNCTION</li>
        <li>ETC</li>
        <li>ASD</li>
      </ul>
      </div>
     
    </nav>
  )
}

export default navbar