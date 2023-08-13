import React from 'react';

const MovieScreenshot = ({images}) => {


    return (

        // <div className=" mt-2 ">
        //     <div
        //         id="carouselExampleCaptions"
        //         className=" carousel slide "
        //         data-bs-ride="carousel"
        //     >
        //
        //         <div className="carousel-inner  ">
        //             {images?.map((image, index) =>
        //                 <div key={index}>
        //                     <div className="carousel-item active   ">
        //                         <img src={image} className=" w-100 d-md-block  rounded active"/>
        //                     </div>
        //                 </div>
        //             )}
        //         </div>
        //
        //     </div>
        // </div>


        <>
                <div className=" d-md-flex mt-5 ">
                    {images?.map((image, index) =>
                        <div key={index} className="row mx-auto ">
                            <div className="col mx-1 my-1">
                                <img src={image} className=" w-100  rounded "/>
                            </div>
                        </div>
                    )}
                </div>

        </>
    );
};

export default MovieScreenshot;
