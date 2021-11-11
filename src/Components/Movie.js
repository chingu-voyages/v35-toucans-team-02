import {useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';




// this is the component for every individual movie result card
export default function Movie({movie, movieId}) {
    const [streaming, setStreaming] = useState([]);

    console.log(movieId)

    // 3rd API call to fetch streaming availability with movie ID
    const STREAMING_API_KEY = `${process.env.REACT_APP_STREAMING_API_KEY}`

    const AVAILABILITY_OPTIONS = {
        method: 'GET',
        url: 'https://streaming-availability.p.rapidapi.com/get/basic',
        params: {
            country: 'us', 
            imdb_id: movieId, 
            output_language: 'en'
        },
        headers: {
          'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
          'x-rapidapi-key': STREAMING_API_KEY
        }
    }
    //API call when user clicks button to check availability:
    const fetchStreaming = async () => {
        await axios.request(AVAILABILITY_OPTIONS, {movieId: {movieId}})
        .then(res => {
            console.log(res.data.streamingInfo);
            
            setStreaming([res.data.streamingInfo]);
            console.log(streaming[0])
            console.log(Object.keys(streaming[0]));
            
            
        }).catch(err => {
            console.log(err)
        })
    }

        //"Movie Card" structure is rendered here: 
    return (
        
        <div className="card m-1" style={{width: "20vw", border: "1px solid black"}}>
            <div style={{width: "100%", objectFit: "contain"}}>
           <img className="card-img-top img-responsive" src={movie.Poster} alt="movie poster" style={{height: "40vh", width: "20vw"}}/>
           </div>
           <div className="card-body mt-2" style={{fontSize: "0.7rem", height: "20vh"}}>
            
                <p className="card-title" style={{fontSize: "0.8rem", fontWeight: "bold"}}>{movie.Title}({movie.Year})</p>
                <p>Rated {movie.Rated}</p>
          <p>{movie.Genre}</p>
          <p>IMDb Rating: {movie.imdbRating} / 10</p>
          </div>
          <div className="card-body">
           <button onClick={fetchStreaming}>check for streaming</button>
           <p>{streaming.length > 0 ? Object.keys(streaming[0]).map((platform, i) => (
               <ul key={i}>
                <li>{platform}</li>   
               </ul>
           )) : ""}</p>   
          </div>
          <div className="card-body" style={{height: "40vh", fontSize: "0.7rem"}}>
              <ul>
                 <li>Released: {movie.Released}</li>
                 <li>Runtime: {movie.Runtime}</li>  
                 <li>Director: {movie.Director}</li> 
                 <li>Actors: {movie.Actors}</li> 
                 <li>Language: {movie.Language}</li>
                 <li>Country: {movie.Country}</li>
                 <li>Box Office: {movie.BoxOffice}</li> 
             </ul>  
               
            

           </div>
               
           
        </div>
        
    )
}
