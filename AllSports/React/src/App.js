import './App.css'; 
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/forgot-password">
            <ForgotPassword></ForgotPassword>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/perfil">
            <Perfil/>
          </Route>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/create-account">
            <CreateAccount></CreateAccount>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
