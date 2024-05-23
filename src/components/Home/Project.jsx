import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import project1 from "../../assets/images/project-1.png";
import project2 from "../../assets/images/project-2.png";
import project3 from "../../assets/images/project-3.png";
import project4 from "../../assets/images/project-4.png";
import project5 from "../../assets/images/project-5.png";

const projects = [
  { id: 1, img: project1, title: "Sample Project 1" },
  { id: 2, img: project2, title: "Sample Project 2" },
  { id: 3, img: project3, title: "Sample Project 3" },
  { id: 4, img: project4, title: "Sample Project 4" },
  { id: 5, img: project5, title: "Sample Project 5" },
];

const Project = () => {
  return (
    <section className='project-section'>
      <div className="container">
        <div className='project-head'>
          <h2>Our Projects</h2>
        </div>
        <div className="row">
          {projects.map((item, i) => {
            const colSize = (i % 5 === 0 || i % 5 === 1) ? 'col-lg-6' : 'col-lg-4';
            return (
              <div className={colSize} key={item.id}>
                <div className='project-images' data-aos="zoom-in">
                  <img src={item.img} alt={item.title} />
                  <div className='sample'>
                    <h3>{item.title}</h3>
                    <Link to={`/Project/Sampleproject/${item.id}`}>
                      {/* Include project ID in the URL */}
                      <p>View More </p>
                      <FaArrowRightLong size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <div className='all-project-btn'>
            <Link to="/Project">
              <button className='project-btn'>All Projects <FaArrowRightLong size={20} /> </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
