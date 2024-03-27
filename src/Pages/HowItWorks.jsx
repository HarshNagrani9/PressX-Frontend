import React from "react" 
import '../Pages/CSS/HowItWorks.css'
import img1 from '../Components/assets/images/1.jpg'
import img2 from '../Components/assets/images/2.jpg'
import img3 from '../Components/assets/images/3.jpg'
import img4 from '../Components/assets/images/4.jpg'
import img5 from '../Components/assets/images/5.jpg'
import img6 from '../Components/assets/images/6.jpg'


const HowItWorks = () => {
  return (
    <div className="main">
        <div className="warpper">
        <div class="line"></div>
            <div className="roww row-1">
                <section>
                <i className="icon fas fa-home"></i>
                    <div className="details">
                        <span className="title" style={{textAlign : "center"}}>1. Customer orders via our dedicated PressX app</span>
                    </div>
                    <img src={img1} alt="1" style={{height: "300px", width :"300px"}} />
               </section>
            </div>

            <div className="roww row-2">
                <section>
                <i className="icon fas fa-star"></i>
                    <div className="details">
                        <span className="title" style={{textAlign : "center"}}>2. Order is received and confirmed by your favourite local laundry store itself</span>          
                    </div>
                    <img src={img2} alt="2" style={{height: "350px", width :"300px"}} id="img2" />
                </section>
            </div>

            <div className="roww row-1">
                <section>
                <i className="icon fas fa-home"></i>
                    <div className="details">
                        <span className="title" style={{textAlign: "center"}}>3. Order is processed smoothly while you can relax and have a cup of coffee....</span>
                    </div>
                    <img src={img3} alt="3" style={{height: "300px", width :"300px"}} id="img3" />        
                </section>
            </div>

            <div className="roww row-2">
                <section>
                <i className="icon fas fa-globe"></i>
                    <div className="details">
                        <span className="title">4. Post processing, the order is dispatched with our branded packaging material which ensures professionalism and hygiene.</span>
                    </div>
                    <img src={img4} alt="4" style={{height: "150px", width :"350px"}} id="img4" />
                </section>
            </div>

            <div className="roww row-1">
                <section>
                <i className="icon fas fa-paper-plane"></i>
                    <div className="details">
                        <span className="title">5. Order will be delivered at your doorstep on the date and time of your choosing.... basically your comfort is guaranteed!</span>
                    </div>
                    <img src={img5} alt="5" style={{height: "300px", width :"350px"}} id="img5" />
                </section>
            </div>

            <div className="roww row-2">
                <section>
                <i className="icon fas fa-map-marker-alt"></i>
                    <div className="details">
                        <span className="title">6. You can choose to pay from several payment options....the way you like!</span>
                    </div>
                    <img src={img6} alt="6" style={{height: "400px", width :"250px"}} id="img6" />
                </section>
            </div>
        </div>

        <div className="circle">
            <section className="circle1"></section>
            <section className="circle2"></section>
            <section className="circle3"></section>
            <section className="circle4"></section>
            <section className="circle5"></section>
        </div>

    </div>
  )
}

export default HowItWorks
