import React from 'react'
import contactImg from "../../assets/images/contact-img.png"
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
const SectionContact = () => {
    return (
        <>
        <section className='contact-section'>
            <div className="container">
                <div className='project-head'>
                    <h2>Contact Us</h2>
                </div>
                <div className="row">
                    <div className="col-lg-5">
                        <form action="" data-aos="fade-right">
                        <div className='inputs'>
                            <input placeholder='Name' type="text" />
                            <input placeholder='Phone Number' type="tel" />
                            <input placeholder='Email' type="email" />
                            <input placeholder='Interested In' type="text" />
                            <textarea name="message" cols={20} rows={40} placeholder='Message' id=""></textarea>
                        </div>

                        <div className='send-email-btn'>
                            <Link>
                             <button className='project-btn'>Send Email <FaArrowRightLong size={20} /></button>
                            </Link>
                        </div>
                        </form>

                    </div>
                    <div className="col-lg-7">
                        <div className='contact-image' data-aos="fade-left">
                        <img src={contactImg} alt="Contact-img" />
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default SectionContact