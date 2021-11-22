import { useState, useEffect } from 'react';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { MOVIES } from '../movies.js' //This is our internal movie data bank.
import Movie from './Movie';
import runtimeToNumber from '../Hooks/filterDuration';

/*this component houses all of the movie responses from the search and how they are filtered and displayed. If I had more time I would have cleaned this up better and made separate files for the different hooks :(
*/
export default function Results({filtered, setFiltered, search, minDuration, setMinDuration, maxDuration, setMaxDuration, searchFilter, setSearchFilter, durationFilter, setDurationFilter, genres, genreFilter, setGenreFilter}) {
   
    //All movies sorted alphabetically:
   const movieList = MOVIES.sort((a, b) => (a.Title.toLowerCase() > b.Title.toLowerCase()) ? 1 : -1);

    
    // -> initial load displays all movies.
   useEffect(() => {
       setFiltered(movieList);
   }, [])

   //To handle for multiple filters: 
   const superFilter = () => {
    let searchString = search.toLowerCase();
    let filters = [];
    let genreList = genres;
    for(let genre in genreList){
        if(genreList[genre] === true && filters.indexOf(genre) === -1){
            filters.push(genre);
            console.log(filters);
        }
        else if(genreList[genre] === false && filters.indexOf(genre) !== -1){
            filters.splice(filters.indexOf(genre), 1);
            console.log(filters);
        }
    }
    let results = movieList.filter((movie, i) => {
        let runTime = runtimeToNumber(movie.Runtime); //uses imported hook to convert string to number
     
        return movie.Director.toLowerCase().match(searchString) && runTime >= minDuration && runTime <= maxDuration || movie.Actors.toLowerCase().match(searchString) && runTime >= minDuration && runTime <= maxDuration || movie.Title.toLowerCase().match(searchString) && runTime >= minDuration && runTime <= maxDuration
    })

    setFiltered(results);
   }

   // For input search filter only
   const filterTitle = () => {
       let searchString = search.toLowerCase();
        if(searchString === "") return setFiltered(movieList);
        
        let results = movieList.filter((movie, i) => {
          
            return movie.Director.toLowerCase().match(searchString) || movie.Actors.toLowerCase().match(searchString) || movie.Title.toLowerCase().match(searchString);
        })
        
        setFiltered(results)
        
    console.log(filtered)
}

//For genre filter only:
const filterGenres = () => {
    let filters = []; // initiate Array of filters
    let genreList = genres;
    //Adds or removes filters as they are checked:
    for(let genre in genreList){
        if(genreList[genre] === true && filters.indexOf(genre) === -1){
            filters.push(genre);
            console.log(filters);
        }
        else if(genreList[genre] === false && filters.indexOf(genre) !== -1){
            filters.splice(filters.indexOf(genre), 1);
            console.log(filters);
        }
    }
    if(filters.length === 0) return setFiltered(movieList);
    console.log(filters);
    // matches filters by genre in movie data:
    let findMatch = movieList.filter((movie, i) => {
        let genreSplit = movie.Genre.toLowerCase().split(", ");
        console.log(genreSplit);
        return filters.every(item => genreSplit.includes(item));
    })
    console.log(findMatch)
    setFiltered(findMatch)
}

  
//-- Re-renders as user types in search
useEffect(() => {
  search !== "" ? setSearchFilter(true) : setSearchFilter(false);
  console.log(search)
  applyFilters()
  
}, [search])

//For filter duration only:
const filterDuration = () => {
    
    let results = movieList.filter((movie, i) => {
      let runTime = runtimeToNumber(movie.Runtime);

      return runTime >= minDuration && runTime <= maxDuration;
      });
      
      setFiltered(results) 
  }
  //Re-renders as user changes duration min or max
  useEffect(() => {
      minDuration !== 0 ? setDurationFilter(true) : setDurationFilter(false);
      applyFilters();
  }, [minDuration])

  useEffect(() => {
      maxDuration !== 400 ? setDurationFilter(true) : setDurationFilter(false);
    applyFilters()
  }, [maxDuration])

  //Re-renders if user selects a genre filter:
  useEffect(() => {
     console.log(Object.values(genres))
     let filterBooleans = Object.values(genres);
     let filterList = filterBooleans.filter(item => item === true);
     console.log(filterList);
     filterList.length > 1 ? setGenreFilter(true) : setGenreFilter(false);
     filterGenres();
     
  }, [genres])

    //Combines multiple filters if necessary:
 const applyFilters = () => {
     if(searchFilter && !durationFilter) return filterTitle();
     if(durationFilter && !searchFilter) return filterDuration();
     if(searchFilter && durationFilter) return superFilter();
 }
    // This component is rendered on the Search component for now. Individual Movie Cards are mapped and rendered here:
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
