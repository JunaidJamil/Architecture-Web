import React from 'react'
import Slider from "react-slick";
import slide from "../../assets/images/header-slide.png"
import slide2 from "../../assets/images/header-slide-2.jpg"
import slide3 from "../../assets/images/header-slide-3.jpg"
import slide4 from "../../assets/images/header-slide-4.jpg"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import "./Home.css"


function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick-nexts"
      style={{ ...style, background: 'black' }}
      onClick={onClick}
    >

      <FaArrowRightLong color='black' size={30} />
    </div>

  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="slick"
      style={{ ...style, background: 'black' }}
      onClick={onClick}
    >
      <FaArrowLeftLong color='black' size={30} />
    </div>
  );
}

const Header = () => {
  
  const settings = {
    autoplay: true,
    fade: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <header className='header-section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="head-heading" data-aos="fade-right">
                <h1>PROJECT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident at assumenda sunt pariatur suscipit, a, quis odit accusantium facere facilis ipsa ad laboriosam quasi cumque officiis? Laborum, qui nobis!</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="slider-container" data-aos="fade-left">
                <Slider {...settings}>
                  <div className="slides">
                    <img src={slide} alt=''/>
                    <div className='view-project'>
                      <Link to="/Project">
                        View Project
                        <FaArrowRightLong color='black' size={20} />
                      </Link>
                    </div>
                  </div>
                  <div className="slides">
                    <img src={slide2} alt=''/>
                    <div className='view-project'>
                      <Link to="/Project">
                        View Project
                        <FaArrowRightLong color='black' size={20} />
                      </Link>
                    </div>
                  </div>
                  <div className="slides">
                    <img src={slide3} alt=''/>
                    <div className='view-project'>
                      <Link to="/Project">
                        View Project
                        <FaArrowRightLong color='black' size={20} />
                      </Link>
                    </div>
                  </div>
                  <div className="slides">
                    <img src={slide4} alt=''/>
                    <div className='view-project'>
                      <Link to="/Project">
                        View Project
                        <FaArrowRightLong color='black' size={20} />
                      </Link>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header