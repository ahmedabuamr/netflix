import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className=' flex justify-between items-center p-4 absolute w-full z-10'>
       <Link to = '/'><h1 className=' text-2xl md:text-4xl font-bold text-red-500'>NETFLIX</h1></Link>
        <div>
            <button  className=' text-white px-6 py-2 ' >Sign In</button>
            <button className=' bg-red-500 text-white px-6 py-2 '>Sign Up</button>
        </div>
    </div>
  )
}
