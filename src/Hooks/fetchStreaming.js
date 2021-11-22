/*
-----DO NOT USE----- (only to be incorporated if we add API calls)

import {useReducer, useEffect} from 'react';
import axios from 'axios';

const ACTIONS = {
    GET: "GET",
    GET_DATA: "get-data",
    ERROR: "error"
}

function reducer(state, action) {
    switch(action.type){
        case ACTIONS.GET:
            return {loading: true, streams: []};
            
        case ACTIONS.GET_DATA:
        return {...state, loading: false, streams: action.payload.streams}
        
        case ACTIONS.ERROR:
        return {...state, loading: false, error: action.payload.error, streams: []};
        
        default: return state
    }
}

export default function FetchStreaming(key) {
    const [state, dispatch] = useReducer(reducer, {streams: [], loading: true});

    console.log(key)

    const AVAILABILITY_OPTIONS = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/get/basic',
        params: {country: 'us', imdb_id: {key}, output_language: 'en'},
        headers: {
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
          'x-rapidapi-key': '47b41b8d27mshbe69129491e3e82p1feba9jsnc57a7f91450a'
        }
    }

    useEffect(() => {
        const cancelToken2 = axios.CancelToken.source();
        dispatch({type: ACTIONS.GET})
        axios.request(AVAILABILITY_OPTIONS, {
            cancelToken: cancelToken2.token,
            key: {key}
        }).then(res => {
            dispatch({type: ACTIONS.GET_DATA, payload: {streams: [res.data]}})
        }).catch(err => {
            if(axios.isCancel(err)) return 
            dispatch({type: ACTIONS.ERROR, payload: {error: err}})
        })
        return () => {
            cancelToken2.cancel();
        }
    }, [key])

    return state
}


*/
