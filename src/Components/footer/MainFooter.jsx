import React from "react";
import './MainFooter.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Maintenance from "../../Pages/Maintenance";

function MainFooter() {
    return (
        <div className="">
            <footer className="footer-20192">
                <div className="site-section">
                    <div className="container">

                        <div className="row">

                            <div className="logo-info">
                                <a href="#" className="footer-logo">PressX</a>
                                {/* <ul className="download-main list-unstyled">
                                    <li>
                                        <a href="#" className="play-store-footer">
                                            <img className="download-img" src="images/play store.png"
                                                alt="Play Store Download"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="app-store-footer">
                                            <img className="download-img" src="images/app store.png"
                                                alt="App Store Download"/>
                                        </a>
                                    </li>
                                </ul> */}
                            </div>
                            <div className="info-items">
                                <h3>About</h3>
                                <div className="list-unstyled links">
                                    <li><a href="/About">About Us</a></li>
                                    <li><a href={'/Maintenance'}>FAQ</a></li>
                                </div>
                            </div>
                            <div className="info-items">
                                <h3>Company</h3>
                                <div className="list-unstyled links">
                                    <li><a href={'/Maintenance'}>Support</a></li>
                                    <li><a href="/Contact">Contact us</a></li>
                                    <li><a href={'/Maintenance'}>Privacy</a></li>
                                    <li><a href={'/Maintenance'}>Terms and Condition</a></li>

                                </div>
                            </div>
                            <div className="info-items">
                                <h3>Team</h3>
                                <div className="list-unstyled links">
                                    <li><a href={'/Maintenance'}>Content Partners</a></li>
                                    <li><a href={'/Maintenance'}>Our Team</a></li>
                                    <li><a href={'/Maintenance'}>Partners</a></li>

                                </div>
                            </div>
                            <div className="info-items">
                                <h3>Follow US</h3>
                                <div className="list-unstyled links">
                                    <li><a href={'/Maintenance'}>Facebook</a></li>
                                    <li><a href={'/Maintenance'}>Whatsapp</a></li>
                                    <li><a href={'/Maintenance'}>Youtube</a></li>
                                    <li><a href="https://www.instagram.com/pressx_india/">Instagram</a></li>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <p className="copyright">
                    <small>Copyright &copy; 2022 , All Rights Reserverds </small>
                </p>
            </footer>
        </div>
    )
}

export default MainFooter;