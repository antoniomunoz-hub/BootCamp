
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
        <div class="bg-dark text-white">
            <div class=" ml-2">
                <h2 class="mb-3">{movie.original_title}</h2>
                <img src={"https://image.tmdb.org/t/p/w500/"+ movie.poster_path} alt=""/>
                <p class="mt-2">{movie.overview}</p>
                <p>Fecha de Lanzamiento : {movie.release_date}</p>
                <p>Nota Media: {movie.vote_average}</p>
                <p>Votos Totales: {movie.vote_count}</p>
            </div>          
        </div>
    )
}
