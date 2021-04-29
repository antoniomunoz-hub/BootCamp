import React,{useEffect, useState} from "react";
import {Navbar, Nav, Form, FormControl, Button}  from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LastsMovies from "./Pages/LastsMovies";

export default function App() {

  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link> <Link to="/last-movies">Last Movies</Link></Nav.Link>
          <Nav.Link> <Link to="/users">Users</Link></Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/last-movies">
            <LastsMovies/>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
