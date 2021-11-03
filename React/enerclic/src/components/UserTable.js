import React from 'react'

export default function UserTable() {
    //Llamada a la API RandomUser con un resultado de 20 usuarios 
   
   fetch('https://randomuser.me/api/?results=20')
  .then(res => res.json())
  .then(data=>{
    
    let author = data.results;
    console.log(author);


  })

    return (
        <div>
            <h2>Lista Usuarios</h2>
        </div>
    )
}

