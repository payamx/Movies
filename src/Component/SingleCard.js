import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Comment} from './Comment'
import {api} from "../Axios";
import Links from "./DownloadLink";
import MovieScreenshot from "./MovieScreenshot";
import DownloadLink from "./DownloadLink";


const SingleCard = () => {
    const [data, setData] = useState([]);
    const {cardId} = useParams();

    useEffect(() => {
        const getData = async () => {

            try {
                const response = await api.get(`/movies/${cardId}`);
                setData(response.data)
            } catch (err) {
                console.log(err,"server error ")
            }
        };

        getData(cardId).then(r => r);

    }, [cardId]);


    return (

        <>
            {data &&
                <div className="">

                    <div className=" container  ">

                        <div className="">
                            <MovieScreenshot images={data.images}/>
                        </div>
                        <div className=" my-5 ">

                            <div className="  card flex-md-row  bg-opacity-75 text-start shadow-lg">

                                <div className="col-md-3">
                                    <img className="card-img-top shadow   " src={data.poster} alt="Card image cap"/>

                                </div>
                                <div className="col-md-5   ">

                                    <div
                                        className="card-body
                                    ">
                                        <h5 className="card-title  mb-4">{data.title}</h5>
                                        <div className=" d-flex mx-2 mb-5">
                                            <strong className="pt-">Genre :</strong>
                                            {data.genres?.map((item,index) => <div key={index} className="   px-2
                                          text-dark bg-warning bg-opacity-75 rounded-pill mx-1"><small>{item}</small>
                                            </div>)}
                                        </div>
                                        <div className="">
                                            <p className="card-text  ">{data.plot}</p>

                                        </div>

                                        <div className="d-flex my-4 align-items-center">
                                            <img width="32" height="32"
                                                 src="https://img.icons8.com/cotton/64/the-oscars--v1.png"
                                                 alt="the-oscars--v1"/>
                                            <p className="pt-3"> {data.awards} </p>

                                        </div>


                                    </div>
                                </div>
                                <div className="col4">
                                    <div className=" d-flex flex-sm-column justify-content-around">
                                        <div className=" d-flex   ">
                                            <img width="48" height="48" src="https://img.icons8.com/color/48/imdb.png"
                                                 alt="imdb"/>
                                            <div className="p-3"><strong>{data.imdb_rating}</strong> <small>/10</small>

                                            </div>
                                        </div>
                                        <div className="  d-flex   ">
                                            <img width="48" height="48"
                                                 src="https://img.icons8.com/color/48/calendar--v1.png"
                                                 alt="calendar--v1"/>
                                            <p className="p-3"> {data.year} </p>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>


            }
            <div className="container my-5">
                <DownloadLink/>
            </div>
            <Comment/>
        </>

    )
}

export default SingleCard