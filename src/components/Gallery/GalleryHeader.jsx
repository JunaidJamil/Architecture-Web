import React, { useEffect, useState } from 'react'
import "./Gallery.css"
import GalleryData from './GalleryData'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsSlashLg } from "react-icons/bs";


import { Fancybox } from '@fancyapps/ui';

const GalleryHeader = () => {
    const itemsPerPage = 10; // Set the number of items per page
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(GalleryData.length / itemsPerPage);
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = GalleryData.slice(startIndex, endIndex);

    useEffect(() => {
        Fancybox.bind("[data-fancybox=gallery]", {
       
            Thumbs: {
                type: "classic",
              },
        });

        return () => {
            Fancybox.destroy();
        };
        
    }, []);



    return (

        <>
            <section className='gallery-section'>
                <div className="container">
                    <div className='gallery-head'>
                        <h2>Photo
                            <br />
                            <span>Gallery</span>
                        </h2>
                    </div>
                    <hr />
                    <div className="row">
                        {currentItems.map((gallery, i) => (
                            <div className="col" key={i}>
                                <div className="gallery-parent" data-aos="zoom-in">
                                    <div className='gallery-image'>
                                        <a href={gallery.gallImg} data-fancybox="gallery">
                                        <img src={gallery.gallImg} alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="pagination-btn">
                        <div className="page-number">
                            {currentPage + 1} <BsSlashLg  className='slash'/><span>0{totalPages}</span> 
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

export default GalleryHeader