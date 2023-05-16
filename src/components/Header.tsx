import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi"
import {useState} from "react"
import {RxCross2}from "react-icons/rx"
export default function Header() {
const [toggle,setToggle]=useState(true);  
    return (
        <div className='flex justify-between items-center absolute md:px-14 py-2 sm:py-5 w-full'>

            <div >
                <Image src="/panaverse-logo.png" alt='panaverse dao' width={120} height={120} />
            </div>
            <div className=''>
                <ul className='hidden md:flex space-x-12 text-xl font-semibold'>
                <a className="cursor-pointer" href="#home"><li className='hover:scale-125 duration-200 pt-2 font-extrabold'>Home</li></a>
                <a className="cursor-pointer" href="#explore"><li className='hover:scale-125 duration-200 pt-2 font-extrabold' >Explore</li></a>
                <a className="cursor-pointer" href="#about"><li className='hover:scale-125 duration-200 pt-2 font-extrabold'>About</li></a>
                <a className="cursor-pointer" href="#contact"><li className='hover:scale-125 duration-200 pt-2 font-extrabold' >Contact</li></a>
                    
                          <button className= 'px-6 py-2 bg-blue-500 text-black   rounded-lg text-xl font-bold hover:animate-pulse duration-200'>Apply</button>
                    
                </ul>
            </div>
            <div className='p-5 md:hidden z-20' onClick={()=>setToggle(!toggle)}>
            {toggle ?  <GiHamburgerMenu size={30} /> :  <RxCross2 size={30} /> }
                
            </div>
            {!toggle &&(
        <div className="fixed top-0 left-0 bg-white text-black h-screen w-full flex justify-center items-center ">
        <ul className=' text-xl font-semibold '>
            <li className='text-8xl my-4 '>Home</li>
            <li className='text-8xl my-4 '>Explore</li>
            <li className='text-8xl my-4 '>About</li>
            <li className='text-8xl my-4 ' >Contact</li>
        </ul>

        </div>)}
 
           

        </div>
    )
}
