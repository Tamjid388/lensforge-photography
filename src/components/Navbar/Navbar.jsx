import { Camera } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

export const Navbar = () => {
  const links=<>
  <li>
  <Link to="/">Home</Link>
  </li>
<li>
<Link to="/blog">Blog</Link>
</li>
  <li>
  <Link to="/contact">Contact</Link>
  </li>

  
  </>
  return (
    <div className="navbar bg-base-100 shadow-sm max-w-7xl m-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       
      {
        links
      }
      </ul>
    </div>

    <div className='flex items-center gap-2'>
    <p className='bg-linear-to-r from-orange-400 to-orange-600 p-1 rounded-md text-white'>
        <Camera />
    </p>
  <a className="font-bold text-xl">LensForge</a>
    </div>
  
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    
    <a className="text-white btn  bg-linear-to-r from-orange-400 to-orange-600">Sign Up</a>
  </div>
</div>
  ) 
}
