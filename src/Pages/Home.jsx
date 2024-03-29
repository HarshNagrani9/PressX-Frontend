import React from 'react'
import './CSS/home.css';
import page1 from '../Components/assets/images/page1.png';
import page2 from '../Components/assets/images/page2.jpg';
import iron from '../Components/assets/images/iron.png';
import tshirt from '../Components/assets/images/tshirt.png';
import why_choose_us1 from '../Components/assets/images/why_choose_us1.png';
import why_choose_us2 from '../Components/assets/images/why_choose_us2.png';
import why_choose_us3 from '../Components/assets/images/why_choose_us3.png';
import why_choose_us4 from '../Components/assets/images/why_choose_us4.png';
import { useState,useEffect } from 'react';
import washing from '../Components/assets/images/washing.png'
import achive1 from '../Components/assets/images/achive1.jpg'
import achive2 from '../Components/assets/images/achive2.jpg'

const Home = () => {
 
  
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1},
        { id: 2},
        { id: 3}
    ];
    const [currentAchieveSlide , setCurrentAchieveSlide] = useState(0); 
    const achievementSlide = [
        { id: 1},
        { id: 2}
    ];
    

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
        console.log("Next clicked");
    };
    const nextAchievementSlide = () => {
        setCurrentAchieveSlide((currentAchieveSlide + 1) % achievementSlide.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
        console.log("Prev clicked");
      };
    
      const prevAchievementSlide = () => {
        setCurrentAchieveSlide((currentAchieveSlide - 1 + achievementSlide.length) % achievementSlide.length);
      };
     
       useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000); // Change the interval time (in milliseconds) as needed

        return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
    }, [currentSlide]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
            nextAchievementSlide();
        }, 5000); // Adjust the interval time as needed

        return () => clearInterval(intervalId);
    }, [currentSlide, currentAchieveSlide]);

  return (
    <div className="text-center m-auto md:text-left">
      <div className="w-80vw m-auto mt-4 md:flex">
        <div>
          <div className="md:pl-24 lg:pl-48 lg:pr-24 md:pr-4 md:pt-32 px-15p ">
            <h1 className="text-[#f6df0f] text-7xl font-black"><b>PRESSX</b></h1>
            <h2 className="text-3xl font-semibold">Ironing out the Wrinkles of Life</h2><br />
            <h4 className="text-xl">A website / app for everyone, designed to improve your laundry experience.</h4><br />
          </div>
        </div>
        <div className="px-0 pt-20 lg:px-32 ">
          <div>
            <img className="px-20  md:px-0 w-12/12 lg:w-11/12" src={page1} alt="img1" />
            <div>
              <img className="pr-20 md:pr-4 pl-24 md:pl-4 md:pt-20 lg:w-9/12 md:w-12/12" src={page2} alt="img2" />
            </div>
          </div>
        </div>
      </div>
      

      
      <div className="mb-48 md:mb-4 main_circle_page1">
       
        
        
        
        {/* <div className="circle">
        
            <section className="circle1"></section>
            <section className="circle2"></section>
            <section className="circle3"></section>
            <section className="circle4"></section>
            <section className="circle5"></section>
            <section className="circle6"></section>
             */}
            <div className="relative w-12/12 text-center h-fit" data-carousel="static">
            <div className=" overflow-hidden rounded-lg bg-yellow-300 h-fit pb-16 pt-0">
                <h2 className="text-6xl text-[#2b2020] relative font-bold py-8">Features</h2>

                {slides.map((slide, index) => (
                    <div key={slide.id} className={index === currentSlide ? "flex-none md:flex items-center duration-300 ease-in-out" : "hidden duration-300 ease-in-out"} data-carousel-item={index === currentSlide ? "active" : null}>
                        {index === 0 && (
                            <img src={washing} className="block w-56 md:w-60 m-auto md:ml-72 my-20" alt="..." />
                        )}
                        {index === 1 && (
                            <img src={tshirt} className="block w-56 md:w-60 m-auto md:ml-72 my-20" alt="..." />
                        )}
                        {index === 2 && (
                            <img src={iron} className="block w-56 md:w-60 m-auto md:ml-72 my-20" alt="..." />
                        )}
                        <div className="mx-20 md:mx-40 md-w-fit text-left text-3xl pt-16 carouselInfo">
                            {index === 0 && (
                                <>
                                    <h5>On-Demand Ordering</h5>
                                    <br />
                                    <p>"We provide complete On-demand ordering facilities for various services related to your daily laundry needs"</p>
                                </>
                            )}
                            {index === 1 && (
                                <>
                                    <h5>Endless Options at Your Fingertips</h5><br />
                                    <p>"Choose from a plethora of options via our dedicated app"</p>
                                </>
                            )}
                            {index === 2 && (
                                <>
                                    <h5>Revolutionary Packaging</h5><br />
                                    <p>"We provide a completely new way of packaging material to ensure top-notch care for your clothes"</p>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevSlide}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
        
            {/* <section className="circle7"></section>
            <section className="circle8"></section>
            <section className="circle9"></section>
            <section className="circle10"></section>
            <section className="circle11"></section>
            <section className="circle12"></section>
        </div> */}
    </div> 
      

    <div className=" choose_us_main">
 
      <div className="circle-choose_us">
      <div className="choose_us_circle1"></div>
      <div className="choose_us_circle2"></div>
      <div className="choose_us_circle3"></div>
      <div className="choose_us_circle4"></div>
      <div className="choose_us_circle5"></div>
      <div className="choose_us_circle7"></div>
      <div className="choose_us_circle8"></div>
      <div className="choose_us_circle9"></div>
      <div className="choose_us_circle10"></div>
      <div className="choose_us_circle11"></div>
      <div className="choose_us_circle12"></div>
      <div className="choose_us_circle13"></div>
      <div className="choose_us_circle14"></div>
      <div className="choose_us_circle15"></div>
      <div className="choose_us_circle16"></div>
      <div className="choose_us_circle17"></div>
      <div className="choose_us_circle18"></div>
      <div className="choose_us_circle19"></div>
      <div className="choose_us_circle20"></div>
      <div className="choose_us_circle21"></div>
      <div className="choose_us_circle22"></div>
      <div className="choose_us_circle23"></div>
      </div>

      <div className="pt-40 md:pt-8 why_choose_us">
            <div >
                <h1 className="font-quicksand headingUs">Why Choose Us?</h1>
            </div>
            <div className="md:flex mt-[5%] m-auto">
                <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12 appServices">
                    <h1 className=" pl-16 font-quicksand headingApp">All in one app for various services related to laundry</h1>
                    <p className="font-quicksand paraApp">stay tuned to see more</p>
                </div>
                <div className="pr-16 col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <img src={why_choose_us1} />
                </div>
            </div>  
        </div>
      
        <div className="orderApp">
            <div className=" md:flex row">
                <div className="pl-24 lg:col-span-5 md:col-span-12 sm:col-span-12 col-span-12 ">
                    <img src={why_choose_us2} />
                </div>
                <div className="lg:w-7/12 md:w-full sm:w-full w-full order-first md:order-last sm:order-last orderServices">
                    <h1 className="text-center font-quicksand headingApp">Order via app directly to schedule pickup or delivery</h1>
                    <p className="text-center font-quicksand paraApp"> Order, schedule, and manage laundry pickups and deliveries seamlessly with the PressX app.</p>
                </div>
            </div>
        </div>

        <div class="freedom_to_choose">
            <div className="md:flex row">
                <div className="pl-24 lg:w-1/2 md:w-full sm:w-full w-full appServices">
                    <h1 className="font-quicksand headingApp">Freedom to choose from different laundry's</h1>
                    <p className="font-quicksand paraApp">
                        With the PressX app, enjoy the freedom to choose from a variety of local laundries for your laundry needs.
                    </p>
                </div>
                <div class="lg:w-1/2 md:w-full sm:w-full w-full">
                    <img src={why_choose_us3} class="" />
                </div>
            </div>
        </div>
        <div className="payment">
            <div className="row flex">
                <div className="pl-32 lg:w-5/12 md:w-full sm:w-full pb-16 md:pb-24">
                    <img src={why_choose_us4}  />
                </div>
                <div className="lg:w-1/2 md:w-full order-first md:order-last sm:w-full payment">
                    <h1 className="text-center font-quicksand headingApp">Completely Secure digital payment methods</h1>
                </div>
            </div>
        </div>
      
      </div>
    
  <div className="bg-yellow-200 center main-achive">
  <header className="py-8 md:py-12 achive-heading"> 
      <h1 className="text-5xl font-extrabold ">PressX Achievements</h1>
  </header>
 </div> 
 <div className="bg-yellow-300 relative w-full text-center" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg h-max " >

          {achievementSlide.map((slide, index) => (
              <div key={slide.id} className={index === currentAchieveSlide ? "sm:flex-none lg:flex items-center duration-300 ease-in-out" : "hidden duration-300 ease-in-out"} data-carousel-item={index === currentAchieveSlide ? "active" : null}>
                  {index === 0 && (
                      <img src={achive1} className="block w-fit md:w-6/12 md:ml-40 mt-24 pb-8 text-center rounded-2xl" alt="..." />
                  )}
                  {index === 1 && (
                      <img src={achive2} className="block w-fit md:w-6/12 md:ml-40 mt-24 pb-8 text-center rounded-2xl" alt="..." />
                  )}
                  
                  <div className="carouselInfo lg:mx-32 sm:mx-4 text-center mb-4">
                      {index === 0 && (
                          <>
                              <h1 className="achive-title">
                                 KJSIT 
                            </h1>                                  
                              <br />
                              <p className="w-fit lg:w-96 pr-16 pl-24 ">
                              "Team PressX was awarded the first prize at KJSIT Idea Pitching event which focused on sustainability and social impacts on local brands."
                              </p>
                          </>
                      )}
                      {index === 1 && (
                          <>
                          <h1 className="achive-title">
                          VJTI 
                      </h1>
                      <p className="w-fit lg:w-96 pr-16 pl-24 ">
                          "Team PressX won the third prize at VJTI start-up expo 2023 for its innovative solutions to solve customer pain points and increase business for MSMEs."
                      </p></>
                      )}
                      
                  </div>
              </div>
          ))}
      </div>

      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevAchievementSlide}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
          </span>
      </button>

      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextAchievementSlide}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
          </span>
      </button>
  </div>


  
  </div> 


   

    

   
    

   
    
  );
};


export default Home;




