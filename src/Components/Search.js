import {useState} from 'react';
import runtimeToNumber from '../Hooks/filterDuration';
import Results from './Results';

//Search Bar and Results component rendered here:
export default function Search({search, setSearch, allMovies, setAllMovies, filtered, setFiltered, movieId, setMovieId, home, setHome, minDuration, setMinDuration, maxDuration, setMaxDuration}) {
 
  const [titleFilter, setTitleFilter] = useState(false);
  const [durationFilter, setDurationFilter] = useState(false);
  const [genreFilter, setGenreFilter] = useState([]);
 
  const handleMin = (e) => {
    e.preventDefault();
    if(e.target.value === "") setMinDuration(0);
    setMinDuration(e.target.value);
  }

  const handleMax = (e) => {
    e.preventDefault();
    setMaxDuration(e.target.value);
   
  }
 
    return (
        <div className="d-flex flex-column align-items-center">
         
           <div>
           
           <input className="m-2" onChange={(e) => {setSearch(e.target.value.toLowerCase())}}  value={search} type="text" placeholder="Enter A Movie Title" style={{width: "50vw"}}/>

           <div className="d-flex align-items-center justify-content-center">
             <p>Set a minimum and maximum duration (minutes):</p>
           <input type="number" value={minDuration} min={0} max={400} onChange={handleMin} style={{width: "10vw"}} />
      
           <input type="number" value={maxDuration} min={0} max={400} onChange={handleMax} style={{width: "10vw"}} />
            </div>
            <div className="d-flex align-items-center justify-content-center">

            </div>
            <button id="home-button" onClick={() => setHome(1)}>Landing Page</button>
           </div>
          <div>
          <Results 
          filtered={filtered}
          setFiltered={setFiltered}
          search={search}
          setSearch={setSearch}
          minDuration={minDuration}
          setMinDuration={setMinDuration}
          maxDuration={maxDuration}
          setMaxDuration={setMaxDuration}
          titleFilter={titleFilter}
          setTitleFilter={setTitleFilter}
          durationFilter={durationFilter}
          setDurationFilter={setDurationFilter}
          />
       </div>
          </div> 
        
    )
}