
import React,{useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function Details() {
    
    const[movie, setMovie] = useState({});
    const {id} = useParams();
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
