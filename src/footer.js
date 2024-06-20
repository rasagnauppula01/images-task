import React from 'react';
import './footer.css';
import googlePageSpeed from './assets/google-img.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import image1 from "./assets/Logo.jpg"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    {/* <img src="path-to-logo" alt="Company Logo" className="logo" />  */}
                    <div className="logo" style={{margin:"auto",marginTop:"5px"}}>
                        <img src={image1} alt='logo' width={190} height={65}  ></img>
                        <span className='inspiration-regular' style={{}}>Ik developers</span>
                    </div>
                    <br></br>
                    <p>Lorem Ipsum is simply dummy text of the <br></br> printing and typesetting industry.</p>
                    <img src={googlePageSpeed} alt="Google PageSpeed" className="google-pagespeed" />
                    {/* <img src="path-to-google-pagespeed-image" alt="Google PageSpeed" className="google-pagespeed" />  */}
                </div>
                <div className="footer-section links">
                    <h2 style={{fontWeight:"bold"}}>Links</h2>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Case Studies</li>
                        <li>How it works</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Areas We Serve</li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2 style={{fontWeight:"bold"}}>Contact us</h2>
                    <p>Lorem Ipsum is simply dummy text <br></br>of the printing and typesetting <br></br>industry.</p>
                    <p>+923183561921</p>
                    
                </div>
                <div className="social-icons">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
            </div>
            <div className="footer-bottom">
                <p>© 2023 Copyright by IK Developers. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
