import React from 'react'
import Cart from '../assets/Cart-Logo.png'
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className=' border-b-2 pb-4 border-solid border-gray-300'>
        <div className='flex justify-evenly py-4 items-center my-2'>
            <div className='flex items-center gap-2'>
                <img className='h-8' src={Cart} alt="" />
                <h1 className='text-xl font-semibold'>Aayushi Super Shoppy</h1>
            </div>
            <div className='flex gap-4 items-center'>
                <div className="relative">
                <input
                    type="text"
                    name="q"
                    className="w-96 border h-8 shadow p-4 rounded-xl bg-transparent"
                    placeholder="search"
                />
                <button type="submit">
                    <svg
                    className="text-teal-400 h-5 w-5 absolute top-2 right-3 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style={{ enableBackground: 'new 0 0 56.966 56.966' }}
                    xmlSpace="preserve"
                    >
                    <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                    />
                    </svg>
                </button>
                </div>
                <button className='px-4 py-2 h-8 bg-transparent text-xl border-2 border-solid border-gray-400 flex items-center rounded-xl'> <IoLocationOutline /> Location</button>
            </div>
            <div className='flex gap-4'>
                <FaRegHeart className='text-2xl' />
                <CgProfile className='text-2xl' />
                <LuShoppingCart  className='text-2xl' />
                
            </div>
        </div>
        <div className='flex items-center justify-evenly'>
            <div >
                <button className='bg-green-600 text-white font-medium text-lg rounded-xl px-4 py-2'>All Departments</button>
            </div>
            <div >
                <ul className='flex ml-10 gap-8 text-lg font-medium'>
                    <li>Home</li>
                    <li>Main Menu</li>
                    <li>Contact Us</li>
                    <li>Pages</li>
                    <li>Account</li>
                </ul>
            </div>
            <div className='w-24'>
            </div>
        </div>
    </nav>
  )
}

export default Navbar