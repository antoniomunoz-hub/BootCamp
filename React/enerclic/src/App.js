import './App.css';
import UserTable from './components/UserTable';
import {Route} from "react-router-dom";
import NewUser from './components/NewUser';

function App() {
  
  return (
      <div className="App"> 
      <UserTable></UserTable>
      <NewUser></NewUser>
      </div>
  );
}

export default App;
