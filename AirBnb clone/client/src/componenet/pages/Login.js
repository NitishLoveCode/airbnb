import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='flex flex-col items-center justify-center mt-32 gap-3'>
        <div>
            <input className='w-96 h-10 px-2 border border-gray-200 outline-blue-500 rounded-full bg-gray-100' type="email" name='email' placeholder='Email' />
        </div>
        <div>
            <input className='w-96 h-10 px-2 border border-gray-200 outline-blue-500 rounded-full bg-gray-100' type="password" name='password' placeholder='Password' />
        </div>
        <div>
            <button className='w-96 h-10 px-2 border border-gray-200 outline-blue-500 rounded-full bg-manColor text-white'>Login</button>
        </div>
        <div><p>Don't have an accout yet? <Link to={"/register"}><span className='underline text-blue-600'> Register</span></Link></p></div>
    </div>
  )
}
