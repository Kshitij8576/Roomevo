import React from 'react'
import Button from './Button'


function Navbar() {
  return (
    <div className='absolute w-full h-[4.5em] bg-[#fff] flex items-center justify-between px-[1em] border-b-2 border-slate-200 '>
        <div className='w-[9.5em] h-[3.8em] flex items-center'>
            <img className='w-[3em]' src="/public/images/roomlogo.png" alt="" />
            <h2 className='text-[1.2em] font-semibold'>ROOMEVO</h2>
        </div>
        <ul className='flex gap-10'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Rent</a></li>
            <li><a href="#">Owner</a></li>
            <li><a href="#">All Rooms</a></li>
            <li><a href="#">About</a></li>
        </ul>
        <div className='flex gap-5'>
            <Button text="Login" style="w-[5.5em] h-[2.5em] border-2 border-slate-500"/>
            <Button text="Sign up" style="bg-[#7065F0] text-white w-[5.5em] h-[2.5em] "/>
        </div>

        
    </div>
  )
}

export default Navbar
