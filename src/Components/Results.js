import { useState, useEffect } from 'react';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { MOVIES } from '../movies.js'
import Movie from './Movie';


//this component houses all of the movie responses from the search and how they are displayed.

export default function Results({allMovies, setAllMovies, filtered, setFiltered, search}) {
    
   const movieList = MOVIES.sort((a, b) => (a.Title.toLowerCase() > b.Title.toLowerCase()) ? 1 : -1);

    
    // -> initial load
   useEffect(() => {
       setAllMovies(movieList);
       setFiltered(movieList);
   }, [])

   const movieFilter = () => {
       let searchString = search.toLowerCase();
        if(searchString === "") return setFiltered(movieList);
        let results = movieList.filter((movie, i) => {
            return movie.Title.toLowerCase().match(searchString)
        })
        console.log(results)
        setFiltered(results)
        
    console.log(filtered)
}
  
//-- Re-renders as user types in search
useEffect(() => {
  console.log(search)
  movieFilter()
}, [search])


    // Individual Movie Cards are mapped and rendered here:
    return (
        <div id="results">
        
         
         {filtered.length > 0 ? filtered.map(movie => {
             return <Movie key={movie.imdbID} 
             movie={movie} 
             
             />
         }) : "Not found"}
         
        </div>
    )
}
