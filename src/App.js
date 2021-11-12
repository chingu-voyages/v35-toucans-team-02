import {useState} from 'react';
import Search from './Components/Search';
import {Container} from 'react-bootstrap';


function App() {
  // Search and movie ID held in state in main APP for use in other components
  const [search, setSearch] = useState(''); // <-- initial search when loaded
  const [movieId, setMovieId] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  
  
  
  

  return (
    <Container>
      <Search search={search}
      setSearch={setSearch}
      movieId={movieId}
      setMovieId={setMovieId}
      allMovies={allMovies}
      setAllMovies={setAllMovies}
      filtered={filtered}
      setFiltered={setFiltered}
      />
    </Container>
  );
}

export default App;
