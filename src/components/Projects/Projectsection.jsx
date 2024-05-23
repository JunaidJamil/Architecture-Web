import React, {useState } from 'react'
import "./Project.css"
import { Link } from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsSlashLg } from "react-icons/bs";

import ProjectCard from "./ProjectData"

const Projectsection = () => {
    const itemsPerPage = 2; // Set the number of items per page
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(ProjectCard.length / itemsPerPage);
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const Projects = ProjectCard.slice(startIndex, endIndex);

    return (
        <>
            <section className='project-section'>
                <div className="container">
                    <div className='project-head'>
                        <h2>Our
                            <br />
                            <span>Projects</span>
                        </h2>
                    </div>
                    <hr />
                    <div className="row">
                        {
                            Projects.map((card, i) => 
                                <div className="col-lg-12" key={i}>
                                  <div className='project-card-parent'>
                                    <Link to={`/Project/Sampleproject/${card.id}`}>
                                    <div className="project-card" data-aos="zoom-in-up">
                                        <div className="project-image">
                                            <img src={card.projectcard} alt="" />
                                        </div>
                                        <div className="project-content">
                                            <h2>{card.cardHead}</h2>
                                            <p>
                                                {card.cardpara}
                                            </p>
                                            <div className='project-content-btn'>
                                                <Link to={`/Project/Sampleproject/${card.id}`}>
                                                    <button className='read-btn'>View More <FaArrowRightLong size={20} /></button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                    </div>
                                </div>
                            )}
                    </div>

                    <div className="pagination-btn">
                        <div className="page-number">
                            {currentPage + 1} <BsSlashLg  className='slash'/><span>{totalPages}</span> 
                        </div>
                        <div className="prev-btn" onClick={handlePrevPage}>
                            <FaArrowLeftLong className='arrow' size={30} />
                        </div>
                        <div className="next-btn" onClick={handleNextPage}>
                            <FaArrowRightLong className='arrow' size={30} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Projectsection