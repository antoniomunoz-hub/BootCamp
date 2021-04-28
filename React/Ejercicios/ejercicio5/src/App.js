import './App.css';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import App1 from "./pages/App1"
import App2 from "./pages/App2"
import App3 from "./pages/App3"
import App4 from "./pages/App4"


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavLink to="/">Ejercicio1</NavLink>
        <NavLink to="">Ejercicio2</NavLink>
        <NavLink to="">Ejercicio3</NavLink>
        <NavLink to="">Ejercicio4</NavLink>

        <Switch>

          <Route exact path="./pages/App1" component={App1}/>
          <Route path="/pages/App2" component={App2}/>
          <Route path="./pages/App3" component={App3}/>
          <Route path="./pages/App4" component={App4}/>
          

          <Route component={Error}/>

        </Switch>  

        </BrowserRouter>


    </div>
  );
}

export default App;
