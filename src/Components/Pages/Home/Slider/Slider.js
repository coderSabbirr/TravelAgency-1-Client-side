import React from 'react';
import './Slider.css';
const Slider = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                       
                            <div>
                                <img className="slider-img-1" style={{height:'670px'}} src="https://i.ibb.co/4mJdLg5/banner-1-0158ff1d.png" alt="img1" />
                            </div>
                    </div>
                    <div className="carousel-item  ">

                         
                            <div>
                                <img style={{height:'670px'}} className="slider-img-1" src="https://i.ibb.co/Kjq1SbF/Screenshot-78.png" alt="img1" />
                            </div>

                       

                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;