import React,{useEffect, useState} from "react";
import {Card, Button} from "react-bootstrap";

export default function LastsMovies() {
    
    const[movie, setMovie] = useState({});
    useEffect(() => {
      
      fetch('https://api.themoviedb.org/3/movie/550?api_key=64630dedf75d27e2299520a51e45e9b1 ')
      .then(response => response.json())
      .then(data => (setMovie(data)));
     
    
    }, [])

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>{movie.original_title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Mas Informacion</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
