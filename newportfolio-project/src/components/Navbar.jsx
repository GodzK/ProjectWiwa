import React from 'react'
import "./navbar.css"
function navbar() {
  return (
    <div>
        <nav className='nav-container'>
            <div className='nav-header'>
                <h1>Frontend Practice</h1>
            </div>
            <div className='nav-list'>
                <li>Home</li>
                <li>Project</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Contact</li>
                <li>Newsletter</li>
            </div>
        </nav>
        
    </div>
  )
}

export default navbar