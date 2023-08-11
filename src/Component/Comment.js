import React, {useEffect, useState} from 'react';
import axios from "axios";

export const Comment = () => {
    const [Data, setData] = useState();

    const fetchApi = async () => {
        const request = await axios.get('https://jsonplaceholder.ir/users');
        const request2 = await axios.get('https://jsonplaceholder.ir/comments');
        const response = await axios.all([request, request2]);

        const apiData = response[0].data
        const apiData2 = response[1].data


        setData({apiData, apiData2})

    }

    useEffect(() => {

        fetchApi().then(r => r);
    }, []);

    return (

        <div>


            <div className="container mb-5 ">

                <div className=" border border-dark border-opacity-50 rounded p-4  ">
                    <div className=" mb-5">
                        <h4 className=" fw-bold">Recent Comments</h4>
                        <div className="w-100"></div>
                        <p className=" fs-5 opacity-50"> Latest comments section by users</p>
                    </div>
                    {Data?.apiData.map((item, index) =>{

                        const correspond=Data?.apiData2[index];
                        return (
                        <div key={index} className="d-flex justify-content-start  ">
                            <div className="col-4 col-md-1    ">
                                <img className=" rounded-circle  " width="80" height="80"
                                     src={item.avatar}/>
                            </div>
                            <div className=" col-8 col-md-11 ms-1 text-start  ">
                                <div className=" d-flex row my-md-2 ">
                                    <div className="col ">
                                        <strong className="fs-5 lh-sm d-block   mb-sm-3">{item.username}</strong>
                                        <time className="fs-6 ps-1  "> March 07,2021</time>
                                    </div>
                                    <div className=" mt-3">
                                        <p className="badge badge-rounded bg-primary text-white py-1 ms-2">Approved</p>
                                        <img className=" opacity-50 ms-2" width="24" height="24"
                                             src="https://img.icons8.com/material-sharp/24/edit--v1.png"
                                             alt="edit--v1"/>
                                        <img className="  ms-2" width="24" height="24"
                                             src="https://img.icons8.com/color/48/recurring-appointment--v1.png"
                                             alt="reboot"/>
                                        <img className="  ms-2" width="24" height="24"
                                             src="https://img.icons8.com/color/48/filled-like.png" alt="filled-like"/>
                                    </div>
                                    <div className="text-start my-4">
                                        {correspond.body}
                                    </div>
                                    <div className="w-100 border-bottom my-3"></div>
                                </div>
                            </div>

                        </div>);})}


                </div>
                </div>


        </div>
    );
};

