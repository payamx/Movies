import React, {useEffect, useReducer, useState} from 'react'
import Paginate from '../Component/Paginate'
import {ACTION_FETCH, axiosReducer, initialState} from "../Reducer/Fetchreducer";
import MovieCards from "../Component/MovieCards";
import SearchBar from "../Component/SearchBar";
import {api} from "../Axios";
import CarouselComponent from "../Component/CarouselComponent";

const Home = () => {

    const [state, dispatch] = useReducer(axiosReducer, initialState);
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState(null);
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
    const getData2 = async () => {
        dispatch({type: ACTION_FETCH.FETCH_START})
        try {
            const params = {page: currentPage}
            if (query != null || query !== "") {
                params.q = query
            }
            await delay(1000)
            const response = await api.get(`/movies`, {
                params: params
            });
            dispatch({
                type: ACTION_FETCH.FETCH_SUCCESS, data: {
                    data: response.data.data,
                    metadata: response.data.metadata
                }
            })

        } catch (err) {
            dispatch({type: ACTION_FETCH.FETCH_FAIL})
        }
    };
    useEffect(() => {

        let isMounted = true
        currentPage && getData2().then(r => r);
        return () => {
            isMounted = false
        };

    }, [currentPage, query]);

    function search(query) {
        setQuery(query)
        setCurrentPage(1)
    }

    return (

        <>
            <div>
                <CarouselComponent/>
            </div>
            <div>
                <div className="container-fluid">
                    <div className=" d-flex row">
                        <div className="col justify-content-around mx-auto">
                            <SearchBar setSearch={search}/>
                        </div>

                    </div>

                    <div className="row d-flex flex-column-reverse flex-md-row my-auto ">

                        <div className="col-md-10 mx-auto mb-3">

                            {state.data && <MovieCards cardData={state.data}/>}
                            {state.loading && <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            </div>}

                        </div>
                    </div>
                    <div className="row">
                        <div className="col mx-auto my-5 justify-content-around">
                            {state.metaData &&
                                <Paginate total={state.metaData.page_count} page={currentPage} setPage={setCurrentPage}/>}
                        </div>
                    </div>

                </div>

            </div>


        </>)
}

export default Home