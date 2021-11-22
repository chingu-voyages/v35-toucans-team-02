/*
-----DO NOT USE----- (only to be incorporated if we add API calls)


import {useState, useEffect} from 'react';
import FetchMovieId from './fetchMovieId';

export default function SetIdList() {
    const [movieId, setMovieId] = useState([]);

    const {idList} = FetchMovieId();
    console.log(idList)

    useEffect(() => {
        let mounted = true;
        console.log(idList)
        idList.map(movie => {
            setMovieId(movie.imdbID)
            console.log(movieId)
        })

       return() => mounted = false
       
    }, [idList])


    return movieId
}



*/
