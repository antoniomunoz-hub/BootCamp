
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
            <h2>{movie.original_title}</h2>
            <img src={"https://image.tmdb.org/t/p/w500/"+ movie.backdrop_path} alt=""/>
            <p>{movie.overview}</p>
            <p>Fecha de Lanzamiento : {movie.release_date}</p>
            <p>Nota Media: {movie.vote_average}</p>
            <p>Votos Totales: {movie.vote_count}</p>


        </div>
    )
}
