import './App.css'; 
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import EditPerfil from "./Pages/EditPerfil";
import "./StylesPages/ComunPages.css";


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/forgot-password" component={ForgotPassword}/>
          <Route path="/home" component={Home}/> 
          <Route path="/perfil" component={Perfil}/>
          <Route exact path="/" component={Login}/>
          <Route path="/create-account" component={CreateAccount}/>
          <Route path="/editperfil" component={EditPerfil}/>
        </Switch>
        <footer className="footer">
            <div>
              <h4>¿Quienes Somos?</h4>
              <p>Somos una comunidad enfocada a los profesionales del mundo deportivo</p>
            </div>
            <div>
              <h4>Ventajas</h4>
              <p>Date a conocer y obten el ultimo empujon necesario para tu carrera deportiva</p>
            </div>
            <div>
              <h4>Contacto</h4>
              <p>C/Altruista n12 201487 Madrid</p>
              <p>contact@allsports.com</p>
              </div>     
        </footer>

        <div className="copyright">
          <p><small>&copy; Copyright 2020, Example Corporation</small></p>
        </div>
      </div>
    </Router>
  );
}
