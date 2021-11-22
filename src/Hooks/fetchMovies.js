/*
-----DO NOT USE----- (only to be incorporated if we add API calls)

import {useReducer, useEffect} from 'react';
import axios from 'axios';

// constants for switch case in reducer
const ACTIONS = {
    GET: "GET",
    GET_DATA: "get-data",
    ERROR: "error"
}

//sets up the actions for the 2nd API call which brings in most of the movie data
function reducer(state, action) {
    switch(action.type){
        case ACTIONS.GET:
            return {loading: true, movies: []};
            
        case ACTIONS.GET_DATA:
        return {...state, loading: false, movies: action.payload.movies}
        
        case ACTIONS.ERROR:
        return {...state, loading: false, error: action.payload.error, movies: []};
        
        default: return state
    }
}
// This hook will be used after the movieId comes back from the first API call:
export default function FetchMovies(movieId) {
    const [state, dispatch] = useReducer(reducer, {movies: [], loading: true});
    
    console.log(movieId)

    
//Endpoint for OMDB API with movieId variable;
const OMDB_SECOND_URL = `https://www.omdbapi.com/?i=${movieId}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`

// useEffect hook is called whenever the movieId changes from new searches
    useEffect(() => {
        const cancelToken1 = axios.CancelToken.source();
        dispatch({type: ACTIONS.GET})
        axios.get(OMDB_SECOND_URL, {
            cancelToken: cancelToken1.token,
            movieId: {movieId}
        }).then(res => {
            dispatch({type: ACTIONS.GET_DATA, payload: {movies: [res.data]}})
        }).catch(err => {
            if(axios.isCancel(err)) return 
            dispatch({type: ACTIONS.ERROR, payload: {error: err}})
        })
        return () => {
            cancelToken1.cancel();
        }
    }, [movieId])

    return state // state is 'movies'
}


*/