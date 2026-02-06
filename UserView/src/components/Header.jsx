import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between px-20 bg-black text-2xl text-lg text-white py-3 px-2 space-x-5'>
            <div className='space-x-10'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/menu'>Menu</NavLink>
            </div>
            <div className='group relative'>
                <img src="" alt="" />
            </div>
            <div className='hidden group-hover:flex absolute right-1 z-50 flex-col bg-amber-900 p-4 gap-y-3'>
                <NavLink className='hover:underline' to='/profile'>Profile</NavLink>
                <NavLink className='hover:underline' to='/login'>Login</NavLink>
                <NavLink className='hover:underline' to='/register'>Register</NavLink>
            </div>
        </div>
    )
}

export default Header
