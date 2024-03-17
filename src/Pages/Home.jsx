import React from 'react'
import './CSS/home.css'
// import page1 from '../Components/assets/images/page1.png'
// import page2 from '../Components/assets/images/page2.png'
import page1 from '../Components/assets/images/page1.png'
import page2 from '../Components/assets/images/page2.jpg'


const Home = () => {
  return (
    <div className="m-auto p-auto">
      <div className="w-80vw m-auto mt-2">
        <div>
         <div className="pl-48 pt-32 md: py-5p px-15p">
           <h1 className=" text-[#f6df0f] text-7xl font-black "><b>PRESSX</b></h1>  
           <h2 className="text-3xl font-semibold ">Ironing out the Wrinkles of Life</h2><br></br> 
           <h4>A website / app for everyone, designed to improve your laundry experience.</h4><br></br>
         </div>  
      </div>
      <div >
                 <div>
                     <img  src={page1} alt="img1" />
                     <div >
                         <img  src={page2} alt="img2" />
                     </div>
                 </div>
             </div>

      </div >
     </div>
  );
}

export default Home

// import React from "react";
// import "./CSS/home.css";

// const Home = () => {
//   return (
//     <div id="container">
//         <div className="row">
//             <div>
//                 <div className="content">
//                     <h1 className="heading"><b>PRESSX</b></h1>
//                     <h2 className="subHeading">Ironing out the Wrinkles of Life</h2><br>
//                     <h4>A website / app for everyone, designed to improve your laundry experience.</h4><br>
//                     {/* <!-- <ul className="download-main list-unstyled">
//                         <li>
//                             <a href="#" className="play-store-footer">
//                                 <img className="download-img" src="images/play store.png"
//                                     alt="Play Store Download">
//                             </a>
//                         </li>
//                         <li>
//                             <a href="#" className="app-store-footer">
//                                 <img className="download-img" src="images/app store.png"
//                                     alt="App Store Download">
//                             </a>
//                         </li>
//                     </ul> --> */}
//                 </div>
//             </div>
//             <div >
//                 <div>
//                     <img className="machinePic" src="images\page1.png" alt="img1">
//                     <div className="smallPicSection">
//                         <img className="smallPic" src="images\page2.jpg" alt="img2">
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Home
