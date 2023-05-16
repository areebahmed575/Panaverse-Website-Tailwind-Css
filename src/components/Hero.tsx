import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <>
        <div className="bg-url text-center md:px-44 px-3 bg-cover bg-fixed md:py-40 py-28 rounded-b-[30%] " style={{backgroundImage: "url('/5039684.jpg')"}} >
            <p className='text-black font-bold '>Earn as you learn Program</p>
            <h1 className='text-black md:text-6xl text-3xl font-extrabold'>Prepare yourself for your Next Generation of Internet with Panaverse</h1>
            <p className='md:text-xl text-md mt-4 md:px-20 font-bold'>One year Panaverse Dao Earn as you learn program. Consolidating Web 3.0, Metaverse, Artificial Intelligence, Cloud, Edge, Ambient Computing, IOT technologies</p>
            <button className='bg-blue-700 mt-4 px-6 py-4 text-white rounded-lg font-semibold'>MORE INFO</button>
        </div>
        <div className='flex shadow-2xl w-[60%] justify-around md:py-14 py-7 space-y-9 items-center m-auto -mt-[80px] bg-white rounded-2xl md:flex-row flex-col'>
        <div><Image src="/panaverse-logo.png" alt='panaverse dao' width={150} height={150} /></div>
        <div><Image src="/saylani logo.jpg" alt='saylani' width={200} height={200} /></div>
        <div><Image src="/pacloud.png" alt='pacloud dao' width={170} height={170} /></div>
        </div>


        <div className='flex w-[70%] m-auto mt-10 md:flex-row flex-col '>
        <div className='md:w-1/2 mx-auto'><Image src="/6543435.jpg" alt='meta dao' width={300} height={300} /></div>            
        <div className='md:w-1/2 pt-8'>
            <h1 className='text-black md:text-5xl text-3xl font-bold border-l-blue-600 border-l-[8px] pl-2 ' >Program Of Studies</h1>
            <p className='md:text-md text-base mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, dicta. Quod obcaecati, dolorem distinctio, ullam nemo cumque aliquid aperiam possimus pariatur magnam itaque eum eos ducimus autem ipsa suscipit quibusdam harum esse beatae cum. Non laboriosam quisquam nihil voluptatum similique.</p>
            <button className='bg-blue-700  px-5 md:py-3 py-2 text-white rounded-lg font-semibold mt-4'>Read More</button>
        </div>

        <div>
            
        </div>
        
        
        </div>
        <div className='flex my-10 md:flex-row flex-col'>
            <div className='md:w-1/2 bg-url bg-cover bg-center h-[11cm] 'style={{backgroundImage: "url('/StudentsOnComputer.jpg')"}}></div >
            <div className='bg-url md:w-1/2 -my-6 md:p-20 p-7'style={{backgroundImage: "url('/stock-photo-abstract-geometric-background-poly-pattern.jpg')"}}>
                <h1 className='text-black md:text-5xl text-3xl font-bold border-l-blue-600 border-l-[8px] pl-2 '> Bootcamp 2023</h1>
                <p className='md:text-md text-base mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos in consectetur voluptas, voluptatibus officiis quo ipsa debitis minus omnis similique esse quibusdam optio eveniet minima veniam modi qui iusto tempora ratione amet commodi nesciunt ut repudiandae sed! Dicta, cupiditate, fugiat earum repellat reprehenderit harum fugit incidunt quia repellendus iusto sed nihil sit quidem ab quo porro ut? Delectus, sit! Explicabo?</p>
                <button className='bg-blue-700  px-5 md:py-3 py-2 text-white rounded-lg font-semibold mt-4'>Read More</button>
            </div>
        </div>
        </>

    );
}
