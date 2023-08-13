import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
    return (
        <Carousel
            autoPlay          // Enable automatic sliding
            interval={1500}   // Set the interval between slides (in milliseconds)
            infiniteLoop      // Enable infinite looping
            showStatus={false} // Hide the status indicator
            showThumbs={false} // Hide the thumbnail navigation
        >
            <div key={1} className="item-max-height">
                <img
                    src="https://timelinecovers.pro/facebook-cover/download/ready-player-one-facebook-cover.jpg"
                    alt="joker"
                />
            </div>
            <div key={2} className="item-max-height">
                <img
                    src="https://timelinecovers.pro/facebook-cover/download/joker-movie-facebook-cover.jpg"
                    alt="marvel"
                />
            </div>
            <div key={3} className="item-max-height">
                <img
                    src="https://timelinecovers.pro/facebook-cover/download/The-Angry-Birds-Movie-facebook-cover.jpg"
                    alt="angry bird"
                />
            </div>
        </Carousel>
    );
};

export default CarouselComponent;