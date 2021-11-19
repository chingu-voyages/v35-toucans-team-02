import {useState} from 'react';
import Search from './Components/Search';
import Landing from './Components/Landing';
import {Container} from 'react-bootstrap';


function App() {
  // Search and movie ID held in state in main APP for use in other components
  const [search, setSearch] = useState(''); // <-- initial search when loaded
  const [filtered, setFiltered] = useState([]);
  const [home, setHome] = useState(1); //<-- toggle between landing page and search page for now
  const [minDuration, setMinDuration] = useState(0); //default min duration
  const [maxDuration, setMaxDuration] = useState(400); //default max duration

 
  

  return (
    <Container>
      {home === 1 ? 
      
      <Landing home={home}
      setHome={setHome}
      /> :

      <Search search={search}
      setSearch={setSearch}
      filtered={filtered}
      setFiltered={setFiltered}
      home={home}
      setHome={setHome}
      minDuration={minDuration}
      setMinDuration={setMinDuration}
      maxDuration={maxDuration}
      setMaxDuration={setMaxDuration}
      />
      }
    </Container>
  );
}

export default App;
