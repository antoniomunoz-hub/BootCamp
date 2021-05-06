import React from 'react'
import {Card, Button, CardGroup, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Home({movies}) {
    return(

     <div className="last">
    <Container>
        {movies.map((movie, index)=>(   
        <CardGroup key={index}>
            <Card  style={{ width: '1rem' }}>
            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500/"+ movie.backdrop_path}/>
            <Card.Body>
            <Card.Title>{movie.original_title}</Card.Title>
            <Card.Text>
                {movie.overview}
            </Card.Text>
            <Link to={"/details/" + movie.id} variant="primary">Mas Informacion</Link>
            </Card.Body>
        </Card>
        </CardGroup>
        ))}
        
    </Container >
    </div>
    )            
}
