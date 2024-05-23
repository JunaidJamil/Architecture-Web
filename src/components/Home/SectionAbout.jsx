import React from 'react'
import first from "../../assets/images/first-img.png"
import second from "../../assets/images/second-img.png"
import third from "../../assets/images/third-img.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SectionAbout = () => {
    return (
        <>
      <section className='about-parent'>
                <div className="container">
                    <div className="about-section">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="image-side">
                                    <div>
                                        <div className='first-image' data-aos="fade-right">
                                            <img src={first} alt="about-img" />
                                        </div>
                                        <div className='second-image' data-aos="fade-up">
                                            <img src={second} alt="about-img" />
                                        </div>
                                    </div>
                                    <div className='third-image' data-aos="fade-down">
                                        <img src={third} alt="about-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className='title-side' data-aos="fade-left">
                                    <h2>About</h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <div className='title-side-btn'>
                                        <Link to='#'>
                                            <button className='read-btn'>Read More
                                                <FaArrowRightLong size={20} className='right-arrow' />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionAbout