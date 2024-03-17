import React from 'react'
import './CSS/home.css'

import page1 from '../Components/assets/images/page1.png'
import page2 from '../Components/assets/images/page2.jpg'


const Home = () => {
  return (
    <div className="m-auto p-auto">
      <div className="w-80vw m-auto mt-2 flex ">
        <div>
         <div className="pl-48 pr-24 pt-32 md: py-5p px-15p">
           <h1 className=" text-[#f6df0f] text-7xl font-black "><b>PRESSX</b></h1>  
           <h2 className="text-3xl font-semibold  ">Ironing out the Wrinkles of Life</h2><br></br> 
           <h4 className="text-xl ">A website / app for everyone, designed to improve your laundry experience.</h4><br></br>
         </div>  
        </div>
             <div className="px-32 py-20">
                 <div>
                     <img className="px-20 w-12/12" src={page1} alt="img1" />
                     <div >
                         <img className="pr-20 pl-32 py-20 w-11/12" src={page2} alt="img2" />  
                     </div>
                 </div>
             </div>

      </div>
    </div>
     
    
//   <div className="relative w-full" data-carousel="static">
//     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={page1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
//             <img src={page1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={page1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={page1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
//         </div>
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src={page1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
//         </div>
//     </div>
//     <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
//             </svg>
//             <span className="sr-only">Previous</span>
//         </span>
//     </button>
//     <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
//             </svg>
//             <span className="sr-only">Next</span>
//         </span>
//     </button>
// </div>


     
          
    );
  }
     
export default Home
