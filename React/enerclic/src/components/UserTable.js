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
          {/* Hacemos un map para que nos devuelva los resultados por cada usuario */}
              {users.map((user)=>{
                return(
                  <div>
                    {/* Creacion de la tabla */}
                    <table>
                      <thead>
                        <tr>
                          <th>Photo</th>
                          <th>Name</th>
                          <th>Last Name</th>
                          <th>Number Phone</th>
                          <th>Email</th>
                          <th>City</th>
                          <th>State</th>
                          <th>UserName</th>
                        </tr>
                      </thead>
                      
                        <tr>
                          <td>Photo</td>
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

