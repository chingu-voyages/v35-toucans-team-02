import {useState} from 'react';
import Search from './Components/Search';
import Landing from './Components/Landing';
import {Container} from 'react-bootstrap';


function App() {
  // Search and movie ID held in state in main APP for use in other components
  const [search, setSearch] = useState(''); // <-- initial search when loaded
  const [movieId, setMovieId] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [home, setHome] = useState(1);
  
  
  

  return (
    <Container>
      {home === 1 ? 
      
      <Landing home={home}
      setHome={setHome}
      /> :

      <Search search={search}
      setSearch={setSearch}
      movieId={movieId}
      setMovieId={setMovieId}
      allMovies={allMovies}
      setAllMovies={setAllMovies}
      filtered={filtered}
      setFiltered={setFiltered}
      home={home}
      setHome={setHome}
      />
      }
    </Container>
  );
}

export default App;
