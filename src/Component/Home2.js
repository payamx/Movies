import axios from "axios";
import SearchBar from "./SearchBar";
import Category from "./Category";
import Paginate from "./Paginate";
import Cards from "./Card";
import {ACTION_FETCH, axiosReducer, initialState} from "../Reducer/Fetchreducer";
import {useEffect, useReducer, useState} from "react";

const Home2 = () => {
    const [state, dispatch] = useReducer(axiosReducer, initialState);

    //data state
    const [data, setData] = useState([]);
    const [metadata, setMetaData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //category sates
    const [categories, setCategories] = useState([]);
    const [catId, setCatId] = useState(null);

    //searching states
    const [search, setSearch] = useState(null);

    //paginate states
    const [currentPage, setCurrentPage] = useState(1);

    const fetchData = async () => {
        try {
            dispatch({type: ACTION_FETCH.FETCH_START})
            const response = await axios.get(`http://moviesapi.ir/api/v1/movies`);
            setData(response.data.data);
            setMetaData(response.data.metadata);
            setLoading(false);
        } catch (err) {
            dispatch({type: ACTION_FETCH.FETCH_FAIL});
            setError(err);
        } finally {
            // dispatch({type: ACTION_FETCH.FINALLY})
        }
    };

    const fetchSearchData = async (search) => {
        try {
            dispatch({type: ACTION_FETCH.FETCH_START})
            const response = await axios.get(`http://moviesapi.ir/api/v1/movies?q=${search}&page=${currentPage}`);
            setData(response.data.data);
            setMetaData(response.data.metadata);
            setLoading(false);
        } catch (err) {
            dispatch({type: ACTION_FETCH.FETCH_FAIL});
            setError(err);
        } finally {
            // dispatch({type: ACTION_FETCH.FINALLY})
        }
    };

    const fetchCategoryData = async (catId) => {
        try {
            dispatch({type: ACTION_FETCH.FETCH_START})
            const response = await axios.get(`http://moviesapi.ir/api/v1/genres/${catId}/movies`);
            setData(response.data.data);
            setMetaData(response.data.metadata);
            setLoading(false);
        } catch (err) {
            dispatch({type: ACTION_FETCH.FETCH_FAIL});
            setError(err);
        } finally {
            // dispatch({type: ACTION_FETCH.FINALLY})
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setSearch(null);
        setCatId(null);
    }, [search, catId]);

    useEffect(() => {
        if (search !== null) {
            fetchSearchData(search);
        } else if (catId !== null) {
            fetchCategoryData(catId);
        }
    }, [search, catId]);

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className="container-fluid">
                <SearchBar setSearch={setSearch}/>
                <Category categories={categories} setCatid={setCatId}/>
                <Cards cardData={data}/>
                <Paginate setCurrentPage={handleChangePage} currentPage={currentPage}
                          totalPages={metadata?.page_count}/>
            </div>
        </>
    );
};

export default Home2;
