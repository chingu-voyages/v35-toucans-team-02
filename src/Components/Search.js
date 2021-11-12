import {useState, useEffect} from 'react';
import Results from './Results';

export default function Search({search, setSearch, allMovies, setAllMovies, filtered, setFiltered, movieId, setMovieId}) {
 
  const [input, setInput] = useState("");


  
/*
  const onSearch = (e) => {
    e.preventDefault();
    setSearch(input);
    console.log(search)
    movieFilter();
  }
  
  const onKeyDown = (e) => {
    if(e.key === "Enter"){
    setSearch(input);
    console.log(search);
    movieFilter();
    }
  }
*/
  //Search Bar and Results component rendered here:
    return (
        <div className="d-flex flex-column align-items-center">
         
           <div>
           
           <input className="m-2" onChange={(e) => {setSearch(e.target.value.toLowerCase())}}  value={search} type="text" placeholder="Enter A Movie Title" style={{width: "50vw"}}/> 
           
           
          
           </div>
          <div>
          <Results 
          allMovies={allMovies}
          setAllMovies={setAllMovies}
          filtered={filtered}
          setFiltered={setFiltered}
          search={search}
          setSearch={setSearch}
          />
       </div>
          </div> 
        
    )
}