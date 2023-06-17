import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

    const[name,setname]=useState()
    const[email,setemail]=useState()
    const[password,setpassword]=useState()
    const[Cpassword,setCpassword]=useState()

    const register= async()=>{
        if(name && email && password && Cpassword){
            if(password===Cpassword){
                try{
                const res=await fetch("http://localhost:8000/register",{
                    credentials:'include',
                    method:"POST",
                    headers:{
                        "content-type":"application/json"
                    },
                    body:JSON.stringify({
                        name,
                        email,
                        password
                    })

                })
                const data=await res.status()
                console.log(res.status)

                }catch(err){
                    console.log(err)
                }

            }else(
                alert("Password and conform passwrd should be same.")
            )
        }else(
            alert("Please flll all require field.")
        )
    }


  return (
    <div className='flex flex-col items-center justify-center mt-32 gap-3'>
        <div>
            <input className='w-96 h-10 px-2 border border-gray-200 outline-blue-500 rounded-full bg-gray-100' type="name" name='name' placeholder='Name'
            value={name} onChange={e=>setname(e.target.value)}/>
        </div>
        <div>
            <input className='w-96 h-10 px-2 border border-gray-200 outline-blue-500 rounded-full bg-gray-100' type="email" name='email' placeholder='Email' 
                value={email} onChange={e=>setemail(e.target.value)}
            />
        </div>
        <div>
            <input className='w-96 h-10 px-2 border border-gray-200 outline-blue-500 rounded-full bg-gray-100' type="password" name='password' placeholder='Password' 
                value={password} onChange={e=>setpassword(e.target.value)}
            />
        </div>
        <div>
            <input className='w-96 h-10 px-2 border border-gray-200 outline-blue-500 rounded-full bg-gray-100' type="password" name='password' placeholder='Conform Password' 
                value={Cpassword} onChange={e=>setCpassword(e.target.value)}
            />
        </div>
        <div>
            <button onClick={register} className='w-96 h-10 px-2 border border-gray-200 outline-blue-500 rounded-full bg-manColor text-white'>Login</button>
        </div>
        <div><p>Already have an account<Link to={"/login"}><span className='underline text-blue-600'> Login here</span></Link></p></div>
    </div>
  )
}
