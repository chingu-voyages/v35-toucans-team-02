import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

// this is the component for every individual movie result card
export default function Movie({movie, movieId}) {
    
    

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
