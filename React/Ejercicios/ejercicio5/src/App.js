import './App.css';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import App1 from "./pages/App1"
import App2 from "./pages/App2"
import App3 from "./pages/App3"
import App4 from "./pages/App4"
import Error from "./pages/Error"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar px-5 py-3 bg-dark">
          <NavLink to="/"className="text-decoration-none text-light font-weight-bold" activeClassName="text-success">Ejercicio1</NavLink>
          <NavLink to="App2"className="text-decoration-none text-light font-weight-bold" activeClassName="text-success">Ejercicio2</NavLink>
          <NavLink to="App3"className="text-decoration-none text-light font-weight-bold" activeClassName="text-success">Ejercicio3</NavLink>
          <NavLink to="App4"className="text-decoration-none text-light font-weight-bold" activeClassName="text-success">Ejercicio4</NavLink>
        </nav>
        
        <Switch>

          <Route exact path="/" component={App1}/>
          <Route path="/App2" component={App2}/>
          <Route path="/App3" component={App3}/>
          <Route path="/App4" component={App4}/>
          

          <Route component={Error}/>

        </Switch>  

        </BrowserRouter>


    </div>
  );
}

export default App;
