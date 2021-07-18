/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import logo from '../images/logo-transparent.png';
import React from 'react'

function Footer() {
  

    return (
        <footer id="site-footer" className=" bgdark padding_top">
        <div className="container mx-auto">
            <div className="row">
                <div className="column-lg-3 column-md-6 column-sm-6">
                    <div className="footer_panel padding_bottom_half bottom20">
                        <a href="index.html" className="footer_logo bottom25"><img src={logo} alt="trax"/></a>
                        <p className="whitecolor bottom25">Keep away from people who try to belittle your ambitions Small people always do that but the really great Friendly.</p>
                        <div className="d-table w-100 address-item whitecolor bottom25">
                            <span className="d-table-cell align-middle"><i className="fas fa-mobile-alt"></i></span>
                            <p className="d-table-cell align-middle bottom0">
                                +01 - 123 - 4567 <a className="d-block" href="mailto:web@support.com">web@support.com</a>
                            </p>
                        </div>
                        <ul className="social-icons white wow fadeInUp" data-wow-delay="300ms" >
                            <li><a href="javascript:void(0)" className="facebook"><i className="fab fa-facebook-f"></i> </a> </li>
                            <li><a href="javascript:void(0)" className="twitter"><i className="fab fa-twitter"></i> </a> </li>
                            <li><a href="javascript:void(0)" className="linkedin"><i className="fab fa-linkedin-in"></i> </a> </li>
                            <li><a href="javascript:void(0)" className="insta"><i className="fab fa-instagram"></i> </a> </li>
                        </ul>
                    </div>
                </div>
                <div className="column-lg-3 column-md-6 column-sm-6">
                    <div className="footer_panel padding_bottom_half bottom20">
                        <h3 className="whitecolor bottom25">Latest News</h3>
                        <ul className="latest_news whitecolor">
                            <li> <a href="#.">Aenean tristique justo et... </a> <span className="date defaultcolor">15 March 2019</span> </li>
                            <li> <a href="#.">Phasellus dapibus dictum augue... </a> <span className="date defaultcolor">15 March 2019</span> </li>
                            <li> <a href="#.">Mauris blandit vitae. Praesent non... </a> <span className="date defaultcolor">15 March 2019</span> </li>
                        </ul>
                    </div>
                </div>
                <div className="column-lg-3 column-md-6 column-sm-6">
                    <div className="footer_panel padding_bottom_half bottom20 pl-0 pl-lg-5">
                        <h3 className="whitecolor bottom25">Navigation</h3>
                        <ul className="links">
                            <li><a href="#home" className="pagescroll">Home</a></li>
                            <li><a href="#about" className="pagescroll scrollupto">About Us</a></li>
                            <li><a href="#pricing" className="pagescroll">Our Pricing</a></li>
                            <li><a href="#portfolio" className="pagescroll">Portfolio</a></li>
                            <li><a href="#blog" className="pagescroll">Our Blog</a></li>
                            <li><a href="#contact" className="pagescroll">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="column-lg-3 column-md-6 column-sm-6">
                    <div className="footer_panel padding_bottom_half bottom20">
                        <h3 className="whitecolor bottom25">Business hours</h3>
                        <p className="whitecolor bottom25">Our support available to help you 24 hours a day, seven days week</p>
                        <ul className="hours_links whitecolor">
                            <li><span>Monday-Saturday:</span> <span>8.00-18.00</span></li>
                            <li><span>Friday:</span> <span>09:00-21:00</span></li>
                            <li><span>Sunday:</span> <span>09:00-20:00</span></li>
                            <li><span>Calendar Events:</span> <span>24-Hour Shift</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
