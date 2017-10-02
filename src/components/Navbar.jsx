import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container-fluid'>
        <div className='navbar-header'>
        </div>
        <ul className='nav navbar-nav'>
          <li>
            <Link to='/'>
            Home
            </Link>
          </li>
          <li>
            <Link to='/about' >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
