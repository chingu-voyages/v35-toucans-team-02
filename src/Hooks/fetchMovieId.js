/*
-----DO NOT USE----- (only to be incorporated if we add API calls)

import {useReducer, useEffect} from 'react';
import axios from 'axios';


//constants for API actions:
const ACTIONS = {
    MAKE_REQUEST: "make-request",
    GET_DATA: "get-data",
    ERROR: "error"
}

function reducer(state, action) {
    switch(action.type){
        case ACTIONS.MAKE_REQUEST:
            return {loading: true, idList: []};
            
        case ACTIONS.GET_DATA:
        return {...state, loading: false, idList: action.payload.idList};
        
        case ACTIONS.ERROR:
        return {...state, loading: false, error: action.payload.error, idList: []};
        
        default: return state
    }
}
export default function FetchMovieId(){
    const [state, dispatch] = useReducer(reducer, {idList: [], loading: true});
    

   

    useEffect(() => {
        const cancelToken1 = axios.CancelToken.source();
        dispatch({type: ACTIONS.MAKE_REQUEST})
        axios.get(`https://www.omdbapi.com/?apikey=4079f89d&`, {
            cancelToken: cancelToken1.token,
            //search: {search}
        }).then(res => {
            dispatch({type: ACTIONS.GET_DATA, payload: {idList: [res.data.Search.imdbID]}})
        }).catch(err => {
            if(axios.isCancel(err)) return 
            dispatch({type: ACTIONS.ERROR, payload: {error: err}})
        })
        return () => {
            cancelToken1.cancel();
        }
    }, [])

    return state
}
*/