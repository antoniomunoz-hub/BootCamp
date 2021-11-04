import './App.css';
import UserTable from './components/UserTable';
import NewUser from './components/NewUser';
import React,{useEffect, useState} from "react";


function App() {
  const[users, setUsers] = useState([]);
  const[user, setUser] = useState({name: {first: '', last: ''}, email: '', cell: '', location:{city: '', state: '' }, login: {username: ''}});
  const edit = (user)=>{
    console.log(user);
    setUser(user)
  }
  useEffect(() => {
    //Llamada a la API RandomUser con un resultado de 20 usuarios 

    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(data=>(setUsers(data.results)
    ));
    
  }, [])
 
  
  
  return (
      <div className="App"> 
      <UserTable edit={edit} users={users}></UserTable>
      <NewUser user={user} users={users} setUsers={setUsers}></NewUser>
      </div>
  );
}

export default App;
