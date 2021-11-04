import React,{useEffect, useState} from "react";
import '../styles/UserTable.css'

export default function UserTable() {
  const[users, setUsers] = useState([]);
  useEffect(() => {
    //Llamada a la API RandomUser con un resultado de 20 usuarios 

    fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(data=>(setUsers(data.results)
    ));
    
  }, [])
   
    return (
        <div className="userList">
          {/* cabezera de la tabla */}
          <thead className="header">
            <tr className="tittle">
              <td>Name</td>
              <td>Last Name</td>
              <td>Number Phone</td>
              <td>Email</td>
              <td>City</td>
              <td>State</td>
              <td>UserName</td>
            </tr>
          </thead>
          {/* Hacemos un map para que nos devuelva los resultados por cada usuario */}
              {users.map((user)=>{
                return(
                  <div>
                    {/* Creacion de la tabla */}
                    <table>
                        <tr>
                          <td>{user.name.first}</td>
                          <td>{user.name.last}</td>
                          <td>{user.cell}</td>
                          <td>{user.email}</td>
                          <td>{user.location.city}</td>
                          <td>{user.location.state}</td>
                          <td>{user.login.username}</td>
                        </tr>
                    </table>
                  </div>
                )
              })}
        </div>
    )
}

