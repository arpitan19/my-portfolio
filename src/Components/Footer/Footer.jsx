import React from 'react';
import './Footer.css'
const Footer = () =>{
    return(
        <div className='footer'>
        <div className="footer-top">
                    <div className="footer-top-left">
                        <p>Passionate about technology and innovation, I strive to create impactful projects. Thank you for visiting—let’s stay connected!</p>
                    </div>
        <div className="footer-top-right">
        <div className="footer-email-input">
        <i class="fa-solid fa-user"></i>
        <input type='email' placeholder='Enter your email'/>
        </div>
        <div className="footer-update">Get Updates</div>
        </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='fotter-bottom-left'>© 2025 Arpita Nagmoti. All rights reserved.</p>
            <div className="footer-bottom-right">
                <a href="https://www.linkedin.com/in/arpita-nagmoti-164b6727a/"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/arpitan19"><i class="fa-brands fa-github"></i></a>
                <a href='mailto:arpitanagmoti19@gmail.com'><i class="fa-solid fa-envelope"></i></a>
                <a href='https://www.instagram.com/_arpita_1911/profilecard/?igsh=MW45MGR4ajJqejEyNA=='><i class="fa-brands fa-instagram"></i></a>
            </div>
            </div>
            </div>
    )
}
export default Footer