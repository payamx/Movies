import React from 'react';

const DownloadLink = () => {





    return (
        <>
            <div className="mt-5">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" >
                        <h2 className="accordion-header">
                            <button className="accordion-button  text-warning bg-black" type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                    >
                                Download links
                            </button>
                        </h2>
                        <div id="collapseOne" className="  accordion-collapse collapse show"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body   border-2 border-warning border-bottom"style={{backgroundColor:"#495057"}}>
                                <div className="d-flex row-cols-2 ">
                                    <div className="justify-content-between d-flex align-items-center">
                                        <div className=" d-sm-flex align-items-baseline mt-2 mt-sm-0">
                                            <strong className="text-warning bg-dark p-1 rounded ">Web-Del-1080</strong>
                                            <div className="d-inline-flex my-3  my-sm-0 gap-1 align-items-center p-1">
                                                <div className="badge rounded-pill text-bg-secondary">SoftSub</div>
                                                <div className="badge rounded-pill text-bg-secondary">2.3Gig</div>
                                                <div className="badge rounded-pill text-bg-secondary  ">
                                                    <span className="me-1 ">
                                                        <img width="14" height="14"
                                                             src="https://img.icons8.com/material-outlined/24/tv.png"
                                                             alt="tv"/>
                                                    </span>


                                                    1920 1080</div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="text-end ">
                                        <div className=" ">
                                            <button type="button" className=" btn  btn-warning ">Download link</button>

                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="accordion-body   border-2 border-warning border-bottom"style={{backgroundColor:"#495057"}}>
                                <div className="d-flex row-cols-2 ">
                                    <div className="justify-content-between d-flex align-items-center">
                                        <div className=" d-sm-flex align-items-baseline mt-2 mt-sm-0">
                                            <strong className="text-warning bg-dark p-1 rounded ">Web-Del-720</strong>
                                            <div className="d-inline-flex my-3  my-sm-0 gap-1 align-items-center p-1">
                                                <div className="badge rounded-pill text-bg-secondary">SoftSub</div>
                                                <div className="badge rounded-pill text-bg-secondary">1.7Gig</div>
                                                <div className="badge rounded-pill text-bg-secondary  ">
                                                    <span className="me-1 ">
                                                        <img width="14" height="14"
                                                             src="https://img.icons8.com/material-outlined/24/tv.png"
                                                             alt="tv"/>
                                                    </span>


                                                    1280*720</div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="text-end ">
                                        <div className=" ">
                                            <button type="button" className=" btn  btn-warning ">Download link</button>

                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div className="accordion-body   border-2 border-warning border-bottom"style={{backgroundColor:"#495057"}}>
                            <div className="d-flex row-cols-2 ">
                                <div className="justify-content-between d-flex align-items-center">
                                    <div className=" d-sm-flex align-items-baseline mt-2 mt-sm-0">
                                        <strong className="text-warning bg-dark p-1 rounded ">Web-Del-480</strong>
                                        <div className="d-inline-flex my-3  my-sm-0 gap-1 align-items-center p-1">
                                            <div className="badge rounded-pill text-bg-secondary">SoftSub</div>
                                            <div className="badge rounded-pill text-bg-secondary">700Mb</div>
                                            <div className="badge rounded-pill text-bg-secondary  ">
                                                    <span className="me-1 ">
                                                        <img width="14" height="14"
                                                             src="https://img.icons8.com/material-outlined/24/tv.png"
                                                             alt="tv"/>
                                                    </span>


                                                480*720</div>
                                        </div>

                                    </div>

                                </div>
                                <div className="text-end ">
                                    <div className=" ">
                                        <button type="button" className=" btn  btn-warning ">Download link</button>

                                    </div>

                                </div>

                            </div>

                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DownloadLink;
