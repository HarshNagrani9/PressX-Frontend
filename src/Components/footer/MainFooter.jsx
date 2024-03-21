import React from "react";
import './MainFooter.css'


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
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </div>
                            </div>
                            <div className="info-items">
                                <h3>Company</h3>
                                <div className="list-unstyled links">
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Terms and Condition</a></li>

                                </div>
                            </div>
                            <div className="info-items">
                                <h3>Team</h3>
                                <div className="list-unstyled links">
                                    <li><a href="#">Content Partners</a></li>
                                    <li><a href="#">Our Team</a></li>
                                    <li><a href="#">Partners</a></li>

                                </div>
                            </div>
                            <div className="info-items">
                                <h3>Follow US</h3>
                                <div className="list-unstyled links">
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Whatsapp</a></li>
                                    <li><a href="#">Youtube</a></li>
                                    <li><a href="#">Instagram</a></li>

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