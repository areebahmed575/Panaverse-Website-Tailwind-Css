import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <>
    <div className='md:flex align-middle gap-8 bg-black p-14'>
        <div className=' text-gray-600 md:w-1/4 mb-6 md:mb-0  '>
        <h1 className=' text-white text-2xl font-bold border-l-blue-600 border-l-[6px] pl-2 mb-10  '>About Us</h1>
        <Image src="/panaverse-logo.png" alt='panaverse dao' width={120} height={120} />
        <p className='mt-6'> The movememnt of Web is Web 3.0,
            Meteverse and Edge Computing.
            Panaverse Dao is a movement to spread </p>
        </div>

        <div className=' md:w-1/4 text-gray-600 mb-6 md:mb-0 '>
        <h1 className='text-2xl text-white font-bold border-l-blue-600 border-l-[6px] pl-2 mb-10 '>Useful Link</h1>
        <p className='hover:text-white'><Link href={"/"}>Home</Link></p>
        <p className='hover:text-white'><Link href={"/"}>Syllabus</Link></p>
        <p className='hover:text-white'><Link href={"/"}>Explore</Link></p>
        <p className='hover:text-white'><Link href={"/"}>About</Link></p>
        <p className='hover:text-white'>  <Link href={"/"}>Contact</Link></p>

        </div>

        <div className=' md:w-1/4 text-gray-600 mb-6 md:mb-0 ' >
        <h1 className=' text-white text-2xl font-bold border-l-blue-600 border-l-[6px] pl-2 mb-10'>Follow Us</h1>
        <p className='hover:text-white'>  <Link href={"/"}>Facebook</Link></p>
        <p className='hover:text-white'><Link href={"/"}>Linkedin</Link></p>
        <p className='hover:text-white'>  <Link href={"/"}>Twiter</Link></p>
        <p className='hover:text-white'><Link href={"/"}>Youtube</Link></p>
        <p className='hover:text-white'><Link href={"/"}>Github</Link></p>

        </div>

        <div className=' md:w-1/4 text-gray-600 mb-6 md:mb-0'>
        <h1 className=' text-white text-2xl font-bold border-l-blue-600 border-l-[6px] pl-2 mb-10 '>Conatct Us</h1>
        <p className='hover:text-white'><Link href={"/"}>+92 1234566</Link></p>
        <p className='hover:text-white'><Link href={"/"}>abcd@gmail.com</Link></p>
        <p className='hover:text-white'><Link href={"/"}>Karachi,Pakistan</Link></p>
       

        </div>
        
      
    </div>
    <div className='bg-white font-semibold px-10 py-2 md:flex justify-between text-center'>
    <div className='font-semibold'>    
    <p>All Rights Reserved © | <br className='md:hidden' /><Link href="/"> Areeb Ahmed</Link> </p>
    </div>
    <div className='text-gray-400'>
        <p>
        <Link href={"/"}>Legals |</Link> 
        <Link href={"/"}>Terms of Uses |</Link>  
        <Link href={"/"}> Privacy Policy</Link>
        </p>
    </div>
   </div>
    </>

  )
}
