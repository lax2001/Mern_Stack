import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer id="footer-part" style={{ background: '#07294D', color: '#ffffff' }}>
            <div className="footer-top pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <div className="footer-about mt-40">
                                <div className="logo">
                                    <a href="./index.html"><img className="logoclass" src="images/logo-2.png" alt="Logo" loading="lazy" /></a>
                                </div>
                                <p>Full Stack Box (Data Council) has the courses and resources you need to succeed in today's fast-paced technology industry. Contact us today to learn and start your journey towards rewarding career in tech.</p>
                            </div>
                            <div className="footer-icons">
                                <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
                                <a href="https://twitter.com/FullStackBox" className="social-icon"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/fullstackbox/?igshid=ZDc4ODBmNjlmNQ%3D%3D" className="social-icon"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-link mt-40">
                                <div className="footer-title pb-25">
                                    <h6>Sitemap</h6>
                                </div>
                                <ul>
                                    <li><a href="index.html"><i className="fa fa-angle-right"></i>Home</a></li>
                                    <li><a href="about.html"><i className="fa fa-angle-right"></i>About US</a></li>
                                    <li><a href="courses-in-pune.html"><i className="fa fa-angle-right"></i>Courses</a></li>
                                    <li><a href="programming-blogs.html"><i className="fa fa-angle-right"></i>Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="footer-link support mt-40">
                                <div className="footer-title pb-25">
                                    <h6>Support</h6>
                                </div>
                                <ul>
                                    <li><a href="#"><i className="fa fa-angle-right"></i>FAQS</a></li>
                                    <li><a href="#"><i className="fa fa-angle-right"></i>Privacy</a></li>
                                    <li><a href="#"><i className="fa fa-angle-right"></i>Policy</a></li>
                                    <li><a href="#"><i className="fa fa-angle-right"></i>Support</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-address mt-40">
                                <div className="footer-title pb-25">
                                    <h6>Contact Us</h6>
                                </div>
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-home"></i>
                                        </div>
                                        <div className="cont">
                                            <p> 3rd Floor, Above Jijamata Mahila Sahakari Bank Karvenagar, Pune, Maharastra - 411052 </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="cont">
                                            <p>+91 9850941120</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-phone"></i>
                                        </div>
                                        <div className="cont">
                                            <p>+91 8087601850</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fa fa-envelope-o"></i>
                                        </div>
                                        <div className="cont">
                                            <p>fullstackbox@outlook.com</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
