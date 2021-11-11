import {useEffect} from 'react';
import Results from './Results';
import axios from 'axios';

export default function Search({search, setSearch, movieId, setMovieId}) {
 

  // This can automatically load a search when the page first loads:
  useEffect(() => {
    getId();
  }, [])

  // First API Call retrieves IMDB ID (needed to call other APIs)
  const getId = async () => {
    await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_OMDB_API_KEY}&plot=full`).then((res) => {
      console.log(res.data.Search);
      setMovieId(res.data.Search || []);
      console.log(movieId)
    })
  }
   
 // onSearch and KeyDown are triggered by search button or clicking enter to initiate API call 
  const onSearch = () => {
    console.log(search)
    getId();
  }
  
  const onKeyDown = (e) => {
    if(e.key === "Enter") getId();
  }

  //Search Bar and Results component rendered here:
    return (
        <div className="d-flex flex-column align-items-center">
         
           <div>
           
           <input className="m-2" onChange={e => {setSearch(e.target.value)}} value={search} onKeyDown={onKeyDown} type="text" placeholder="Enter A Movie Title" style={{width: "50vw"}}/> 
           
           <button style={{background: "maroon"}} sz="sm" onClick={onSearch} onChange={() => {setSearch("")}}>
            Search
          </button>
           </div>
          <div id="results">
          {movieId.length > 0 ? 
       (movieId.map(movie => (
       <Results movieId={movie.imdbID} key={movie.imdbID}/>
       ))) : (
         ""
       )}
       </div>
          </div> 
        
    )
}