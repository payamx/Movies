import React from 'react';

const MovieScreenshot = ({images}) => {


    return (

        <div className=" mt-2 ">
            <div
                id="carouselExampleCaptions"
                className=" carousel slide "
                data-bs-ride="carousel"
            >

                <div className="carousel-inner  ">
                    {images?.map((image, index) =>
                        <div key={index}>
                            <div className="carousel-item active   ">
                                <img src={image} className=" w-100 d-md-block  rounded active"/>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default MovieScreenshot;
