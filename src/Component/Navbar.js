import {useEffect, useReducer, useState} from "react";
import axios from "axios";
import {ACTION_FETCH, axiosReducer, initialState} from "../Reducer/Fetchreducer";
import Carousel from "./Carousel";
import {api} from "../Axios";


const Navbar=()=> {

    const [state, dispatch] = useReducer(axiosReducer, initialState);

    const getGenre = async () => {
        try {

            const response = await api.get("/genres")
            dispatch({type: ACTION_FETCH.FETCH_GENRE, data: response.data})

        } catch (e) {
            dispatch({type: ACTION_FETCH.FAIL_GENRE})
        }

    }

    useEffect(() => {
        getGenre().then(r => r);
    }, []);


    return (
        <>


            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white  ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/react-test">Home</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mx-md-3 " id="navbarNavDarkDropdown">
                            <ul className="navbar-nav ">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle " href="src#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Register
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark m-0 ">
                                        <li><a className="dropdown-item" href="src#">lgoin</a></li>
                                        <li><a className="dropdown-item" href="src#">logout</a></li>
                                    </ul>
                                </li>
                            </ul>


                            {/* navbar genre list*/}


                            <ul className="navbar-nav mx-md-4">
                                <li className="nav-item dropdown ">
                                    <a className="nav-link dropdown-toggle  " href="src#" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        Genre
                                    </a>

                                    <ul className=" m-0 dropdown-menu bg-dark  bg-opacity-90   ">
                                        <div className=" d-md-flex  flex-md-wrap  " style={{width: "900px"}}>

                                            {state.genre?.map((item) => {
                                                return <li key={item.id}>
                                                    <a className="dropdown-item bg-transparent  text-warning p-md-4  g-3 fs-5 link-light "
                                                    href={`/react-test/${item.id}`}
                                                    > {item.name} </a>
                                                </li>

                                            })}

                                        </div>

                                    </ul>
                                </li>
                            </ul>
                        </div>


                    </div>
                </nav>

            </div>



        </>
    );
}

export default Navbar;
