import React from 'react';


export const ACTION_FETCH = {
    FETCH_START: "FETCH_START",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_FAIL: "FETCH_FAIL",
    FINALLY: "FINALLY",
    FETCH_GENRE: "FETCH_GENRE",
    FAIL_GENRE: "FAIL_GENRE",
    FETCH_CATEGORY: "FETCH_CATEGORY",
    CURRENT_PAGE: "CURRENT_PAGE",
    SEARCH_MOVIE: "SEARCH_MOVIE"

}
export let initialState = {
    data: [] ,
    metaData: [],
    loading: false,
    error: false,
    genre: [],
    categoryData: [],
    search: null,
    currentPage: 1 ,


}

export const axiosReducer = (state, action) => {
    switch (action.type) {

        case ACTION_FETCH.FETCH_START:
            return {
                ...state,
                data: [],
                loading: true,
                error: false
            };

        case ACTION_FETCH.FETCH_SUCCESS:
            return {
                ...state,
                data: action.data.data,
                metaData: action.data.metadata,
                loading: false,
                error: false


            };

        case ACTION_FETCH.FETCH_FAIL:
            return {
                ...state,
                data: [],
                loading: false,
                error: true,

            };
        case ACTION_FETCH.FINALLY:
            return {
                ...state,
                data: [],
                loading: false,
                error: false
            };
        case  ACTION_FETCH.FETCH_GENRE:
            return {
                ...state,
                genre: action.data

            }
        case ACTION_FETCH.FAIL_GENRE:
            return {
                ...state, genre: " failed genre"
            }
        case ACTION_FETCH.FETCH_CATEGORY:

            return {
                ...state,
                categoryData: action.cat,

            }
        case ACTION_FETCH.CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.current,

            }
        case ACTION_FETCH.SEARCH_MOVIE:
            return {
                ...state,
                search: action.search,
            }


        default:
            return state;

    }


}







