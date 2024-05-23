import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectCard from './ProjectData';
import "./Project.css";
import AOS from 'aos';

const SampleProject = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const { id } = useParams();
  const project = ProjectCard.find((card) => card.id === parseInt(id));

  return (
    <>
      <section className='Sample-Project'>
        <div className="container">
          <div className='project-head'>
            <h2>Sample
              <br />
              <span> Project {id}</span>
            </h2>
          </div>
          {project ? (
            <div className="row">
              <div className="col-lg-12">
                <div className='sample-banner' data-aos="fade-up">
                  <img src={project.banner} alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sample-image" data-aos="fade-right">
                  <img src={project.projectcard} alt="" />
                </div>
              </div>
              <div className="col-lg-8">
                <div data-aos="fade-left">
                  <p>{project.projectDetail}</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className='sample-banner' data-aos="fade-up">
                  <img src={project.archDesign} alt="" />
                </div>
              </div>
            </div>
          ) : (
            <div className='no-data-available'>
              <p>No data available</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default SampleProject;
