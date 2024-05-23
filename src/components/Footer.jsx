import React from 'react'
import Footerlogo from "../assets/images/footer-logo.png"
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
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
                        <div className="col-lg-2">
                            <div className='footer-list'>
                                <div className='footer-head'>
                                    <p>Information</p>
                                </div>
                                <ul>
                                    <li><Link to="/">Main</Link></li>
                                    <li><Link to="/Gallery">Gallery</Link></li>
                                    <li><Link to="/Project">Projects</Link></li>
                                    <li><Link to="/Certification">Certifications</Link></li>
                                    <li><Link to="/Contacts">Contacts</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className='footer-list'>
                                <div className='footer-head'>
                                    <p>Contacts</p>
                                </div>
                                <ul className='footer-cnt-list'>
                                    <li>
                                        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                                            <IoLocationOutline color="white" />
                                            <p>1234 Sample Street</p>
                                        </a>
                                    </li>
                                    <li><a href="tel:512.333.2222"><FiPhone /><p>512.333.2222</p></a></li>
                                    <li><a href="mailto:sampleemail@gmail.com"><IoMailOutline /> sampleemail@gmail.com</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='footer-list'>
                                <div className='footer-head'>
                                    <p>Social Media</p>
                                </div>
                                <div className='footer-social'>
                                    <FaFacebookF className='footer-icon' />
                                    <FaTwitter className='footer-icon' />
                                    <FaLinkedin className='footer-icon' />
                                    <FaPinterestP className='footer-icon' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <hr className='hr-tag' />
                <div className='footer-rights'>
                    <p>© 2021 All Rights Reserved</p>
                </div>
            </footer>

        </>
    )
}

export default Footer