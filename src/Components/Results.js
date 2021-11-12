import {useState, useEffect} from 'react';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import fetchMovies from '../Hooks/fetchMovies';
import {MOVIES} from '../movies.js'
import Movie from './Movie';


//this component houses all of the movie responses from the search
export default function Results({allMovies, setAllMovies, filtered, setFiltered, search}) {
    
   const movieList = MOVIES.sort((a, b) => (a.Title.toLowerCase() > b.Title.toLowerCase()) ? 1 : -1);

    

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
