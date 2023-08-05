import React from 'react';

const MovieScreenshot = ({images}) => {



    return (

        <div className=" mt-sm-3 ">
            <div
                id="carouselExampleCaptions"
                className=" slide "
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators ">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                <div className="carousel-inner  " >
                    {images?.map((image,index) =>
                        <div key={index}>
                            <div  className="carousel-item active   ">
                                <img

                                    src={image}
                                    className=" w-100 d-md-block "

                                />

                            </div>
                        </div>

                    )}
                </div>

            </div>
        </div>
    );
};

export default MovieScreenshot;
