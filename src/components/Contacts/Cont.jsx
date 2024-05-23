import React from 'react';
import './Cont.css';

const Cont = () => {
    return (
        <>
            <div className="Contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-right">
                            <div className='Contact-head'>
                                <h2>Contact
                                    <br />
                                    <span>Information</span>
                                </h2>
                            </div>
                            <div className="contact-info">
                                <div className='contact-street'>
                                    <h3>Company Name</h3>
                                    <p>1234 Sample Street Austin Texas 76401</p>
                                </div>
                                <div className='address'>
                                    <span>512.333.2222</span>
                                </div>
                                <a href="mailto:sampleemail@gmail.com"><p>sampleemail@gmail.com</p></a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className='map' data-aos="fade-left">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14479.802445836183!2d67.05838565!3d24.86553635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8ed4a12105%3A0x1f91cd826b18c36!2sNoorani%20Kabab%20House!5e0!3m2!1sen!2s!4v1716474246240!5m2!1sen!2s"
                                    style={{ width: '100%', height: '400px' }}
                                    title="Google Maps"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cont;
