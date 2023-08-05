import axios from "axios";
import {ACTION_FETCH, axiosReducer, initialState} from "../Reducer/Fetchreducer";
import {useEffect, useReducer, useState} from "react";
import {useParams} from "react-router-dom";
import Carousel from "./Carousel";
import SearchBar from "./SearchBar";
import MovieCards from "./MovieCards";

const GenreCardList = () => {
    const [original, setOriginal] = useState(null);
    const [state, dispatch] = useReducer(axiosReducer, initialState)
    const {newId} = useParams()

    const getCategory = async () => {
        try {
            dispatch({type: ACTION_FETCH.FETCH_START})
            const response = await axios.get(`https://moviesapi.ir/api/v1/genres/${newId}/movies`)
            setOriginal( response.data.data)
            dispatch({type: ACTION_FETCH.FETCH_CATEGORY, cat: response.data.data})
        } catch (e) {
            console.log("get cat error ")
        }
    }


    function dataFilter(q) {
        const filtered = original.filter(item => item.title.toLowerCase().includes(q.toLowerCase()));
        dispatch({type: ACTION_FETCH.FETCH_CATEGORY, cat: filtered})
    }
    const doSearch=(q)=>{
        console.log(q)
        dataFilter(q)
    }

    useEffect(() => {
        getCategory().then(r=>r);
    }, []);

    const SwitchComponent = () => {


        return <MovieCards cardData={state.categoryData}/>
    }


    return (

        <>
            <div>
                <Carousel/>
            </div>
            <div className="col-11 mx-auto mb-3">
                <div>
                    <SearchBar setSearch={doSearch}/>
                </div>
                <div>
                    {SwitchComponent()}
                </div>

            </div>
        </>
    );
}
export default GenreCardList;

