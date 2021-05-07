import React,{useEffect, useState} from "react";
import {Navbar, Nav, Form, FormControl, Button}  from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LastsMovies from "./Pages/LastsMovies";
import Details from"./Pages/Details"; 
import Home from "./Pages/Home";

export default function App() {
  const handleChange =(e)=>setMovie(e.target.value);
  const[movie, setMovie] = useState("");
  const[movies, setMovies] = useState([]);
  const search = (e)=> {
    console.log("paso por aqui");
    e.preventDefault();

    fetch('https://api.themoviedb.org/3/search/movie?api_key=64630dedf75d27e2299520a51e45e9b1&query=' + movie)
      .then(response => response.json())
      .then(data => (setMovies(data.results)));

  }
    
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link> <Link to="/last-movies">Last Movies</Link></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} />
      <Button type="button" onClick={(e)=>search(e)} variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/last-movies">
            <LastsMovies/>
          </Route>
          <Route path="/details/:id">
            <Details/>
          </Route>
          <Route path="/">
            <Home movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
