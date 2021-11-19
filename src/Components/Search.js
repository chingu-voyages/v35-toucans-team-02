import {useState} from 'react';
import Results from './Results';

//Search Bar and Results component rendered here:
export default function Search({search, setSearch, filtered, setFiltered, home, setHome, minDuration, setMinDuration, maxDuration, setMaxDuration}) {
 
  //Switches for when filters are applied/removed:
  const [searchFilter, setSearchFilter] = useState(false); 
  const [durationFilter, setDurationFilter] = useState(false);
  const [genreFilter, setGenreFilter] = useState(false);
  // Genres switch to true/false when checkbox clicked:
  const [genres, setGenres] = useState({
    'action': false, 
    'comedy': false,
    'drama': false,
    'horror': false,
    'mystery': false,
    'romance': false,
    'sci-fi': false,
    'thriller': false
  });
 
  
  //Sets new min duration when user changes value:
  const handleMin = (e) => {
    e.preventDefault();
    setMinDuration(e.target.value);
  }
  //Sets new max duration when user changes value:
  const handleMax = (e) => {
    e.preventDefault();
    setMaxDuration(e.target.value);
  }

  //Sets or unsets genre filters when checkbox clicked:
  const handleGenre = (e) => {
    const {id, checked} = e.target;
  
    setGenres({
      ...genres,
      [id]: checked
    })
    console.log(genres)
    }

  const resetFilters = () => {
    setMinDuration(0);
    setMaxDuration(400);
    setSearch('');
    setSearchFilter(false);
    setDurationFilter(false);
    setGenreFilter(false);
    setGenres({
      'action': false, 
      'comedy': false,
      'drama': false,
      'horror': false,
      'mystery': false,
      'romance': false,
      'sci-fi': false,
      'thriller': false
    })
  }  
    
/* This is where the search and results are rendered. I just added some bootstrap for now but feel free to style however you'd like! The search jsx is here on the top and the Results Component is rendered at the bottom.
*/
    return (
        <div id="movie-search" className="d-flex flex-column align-items-center">
         
           <div>
           
           <input className="m-2" onChange={(e) => {setSearch(e.target.value.toLowerCase())}}  value={search} type="text" placeholder="Enter A Movie Title" style={{width: "50vw"}}/>
           <button onClick={resetFilters}>Reset Filters</button> 
           <div id="duration-setting" className="d-flex align-items-center justify-content-center">
             <p>Set a minimum and maximum duration (minutes):</p>
           <input type="number" value={minDuration} min={0} max={400} onChange={handleMin} style={{width: "10vw"}} />
      
           <input type="number" value={maxDuration} min={0} max={400} onChange={handleMax} style={{width: "10vw"}} />
            </div>

            <div id="genre-checkboxes" className="d-flex align-items-center justify-content-between">
              <p>Action:</p>
            <input type="checkbox" checked={genres.action} name="action" id="action" onClick={handleGenre} />
            <p>Comedy:</p>
            <input type="checkbox" checked={genres.comedy} name="comedy" id="comedy" onChange={handleGenre} />
            <p>Drama:</p>
            <input type="checkbox" checked={genres.drama} name="drama" id="drama" onChange={handleGenre} />
            <p>Horror:</p>
            <input type="checkbox" checked={genres.horror} name="horror" id="horror" onChange={handleGenre} />
            <p>Mystery:</p>
            <input type="checkbox" checked={genres.mystery} name="mystery" id="mystery" onChange={handleGenre} />
            <p>Romance:</p>
            <input type="checkbox" checked={genres.romance} name="romance" id="romance" onChange={handleGenre} />
            <p>Sci-Fi:</p>
            <input type="checkbox" checked={genres.scifi} name="sci-fi" id="sci-fi" onChange={handleGenre} />
            <p>Thriller:</p>
            <input type="checkbox" checked={genres.thriller} name="thriller" id="thriller" onChange={handleGenre} />
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
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          durationFilter={durationFilter}
          setDurationFilter={setDurationFilter}
          genres={genres}
          genreFilter={genreFilter}
          setGenreFilter={setGenreFilter}
          />
       </div>

          </div> 
        
    )
}