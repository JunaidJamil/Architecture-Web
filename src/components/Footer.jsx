import React from 'react'
import Footerlogo from "../assets/images/footer-logo.png"
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const Footer = () => {
    return (

        <>
            <footer className='footer-parent'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className='footer-logo'>
                                <img src={Footerlogo} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='footer-list'>
                                <div className='footer-head'>
                                    <p>Information</p>
                                </div>
                                <ul>
                                    <li><Link>Main</Link></li>
                                    <li><Link>Gallery</Link></li>
                                    <li><Link>Projects</Link></li>
                                    <li><Link>Certifications</Link></li>
                                    <li><Link>Contacts</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='footer-list'>
                                <div className='footer-head'>
                                    <p>Contacts</p>
                                </div>
                                <ul>
                                    <li><Link>1234 Sample Street
                                        Austin Texas 78704</Link></li>
                                    <li><Link>512.333.2222</Link></li>
                                    <li><Link>Projects</Link></li>
                                    <li><Link>sampleemail@gmail.com</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='footer-list'>
                            <div className='footer-head'>
                                    <p>Social Media</p>    
                            </div>
                            <div className='footer-social'>
                            <FaFacebookF className='footer-icon'/>
                            <FaTwitter className='footer-icon'/>
                            <FaLinkedin className='footer-icon'/>
                            <FaPinterestP className='footer-icon'/>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
                    <hr className='hr-tag'/>
                    <div className='footer-rights'>
                    <p>© 2021 All Rights Reserved</p>
                    </div>
            </footer>

        </>
    )
}

export default Footer