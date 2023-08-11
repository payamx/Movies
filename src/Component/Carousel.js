import React, {useEffect} from 'react';
import CarouselComponent from "./CarouselComponent";
const Carousel = () => {


    return (

        <div>

            <div
                id="carouselExampleCaptions"
                className="  carousel slide"
                data-bs-ride="carousel"
            >
                    <div className=" d-flex row ">
                        <div className="col ">
                            <div className="carousel-inner img-fluid  item-max-height "  >
                                <div className="carousel-item active " key={1}>
                                    <img
                                        src="https://timelinecovers.pro/facebook-cover/download/ready-player-one-facebook-cover.jpg"
                                        className="d-block w-100 "
                                        alt="joker"
                                    />
                                </div>
                                <div className="carousel-item " key={2}>
                                    <img
                                        src="https://timelinecovers.pro/facebook-cover/download/joker-movie-facebook-cover.jpg"
                                        className="d-block w-100 "
                                        alt="marvel"
                                    />
                                </div>
                                <div className="carousel-item " key={3}>
                                    <img
                                        src="https://timelinecovers.pro/facebook-cover/download/The-Angry-Birds-Movie-facebook-cover.jpg"
                                        className="d-block w-100 "
                                        alt="angry bird"
                                    />
                                </div>
                            </div>
                        </div>


                    </div>
            </div>
        </div>
    );
};

export default Carousel;
