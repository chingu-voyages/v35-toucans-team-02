import React from 'react';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import fetchMovies from '../Hooks/fetchMovies';
import Movie from './Movie';


//this component houses all of the movie responses from the search
export default function Results({movieId}) {
    const {movies, loading, error} = fetchMovies(movieId);
    console.log(movies)



    // Individual Movie Cards are mapped and rendered here:
    return (
        <div>
         {loading && <h1>Loading...</h1>}
         {error && <h1>Error</h1>}
         
         {movies.length > 0 ? movies.map(movie => {
             return <Movie key={movie.imdbID} 
             movie={movie} 
            
             movieId={movieId}
             />
         }) : ""}
         
        </div>
    )
}
