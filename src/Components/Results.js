import { useState, useEffect } from 'react';
import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { MOVIES } from '../movies.js'
import Movie from './Movie';
import runtimeToNumber from '../Hooks/filterDuration';

//this component houses all of the movie responses from the search and how they are displayed.

export default function Results({filtered, setFiltered, search, minDuration, setMinDuration, maxDuration, setMaxDuration, titleFilter, setTitleFilter, durationFilter, setDurationFilter}) {
    
   const movieList = MOVIES.sort((a, b) => (a.Title.toLowerCase() > b.Title.toLowerCase()) ? 1 : -1);

    
    // -> initial load
   useEffect(() => {
       setFiltered(movieList);
   }, [])

   const superFilter = () => {
    let searchString = search.toLowerCase();
    let results = movieList.filter((movie, i) => {
        let runTime = runtimeToNumber(movie.Runtime);
        console.log(runTime); 
        return movie.Title.toLowerCase().match(searchString) && runTime >= minDuration && runTime <= maxDuration;
    })
    console.log(results);
    setFiltered(results);
   }


   const filterTitle = () => {
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
  search !== "" ? setTitleFilter(true) : setTitleFilter(false);
  console.log(search)
  applyFilters()
  
}, [search])

const filterDuration = () => {
    
    let results = movieList.filter((movie, i) => {
      let runTime = runtimeToNumber(movie.Runtime);
      console.log(runTime);
      return runTime >= minDuration && runTime <= maxDuration;
      });
      console.log(results);
      setFiltered(results);
    
  }

  useEffect(() => {
      minDuration !== 0 ? setDurationFilter(true) : setDurationFilter(false);
      applyFilters();
  }, [minDuration])

  useEffect(() => {
      maxDuration !== 400 ? setDurationFilter(true) : setDurationFilter(false);
    applyFilters()
  }, [maxDuration])

 const applyFilters = () => {
     if(titleFilter && !durationFilter) return filterTitle();
     if(durationFilter && !titleFilter) return filterDuration();
     if(titleFilter && durationFilter) return superFilter();
 }
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
