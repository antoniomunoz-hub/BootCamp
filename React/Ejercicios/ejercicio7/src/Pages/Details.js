
import React,{useEffect, useState} from "react";


export default function Details({id}) {
    
    const[movie, setMovie] = useState({});
    useEffect(() => {
      
      fetch('https://api.themoviedb.org/3/movie/'+ id +'?api_key=64630dedf75d27e2299520a51e45e9b1')
      .then(response => response.json())
      .then(data => (setMovie(data)));
     
    
    }, [])
    return (
        <div>
            {movie.overview}
        </div>
    )
}
