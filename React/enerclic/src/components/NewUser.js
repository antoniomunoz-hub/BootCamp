import React from 'react'
import Input from './Input'
import '../styles/NewUser.css'
import Container from './Container'
import useFormulario from '../hooks/useFormulario'
import { useState } from 'react'


export default function NewUser({user, users, setUsers}) {
    const [formulario, handleChange, reset] = useFormulario({user})
    const submit = e => {
        console.log(user);
      e.preventDefault()
      setUsers([...users, formulario])
    } 
    return (
        <div>
            <Container>
                <h2>Registra un nuevo Usuario</h2>
                <form onSubmit={submit}>
                    <Input label= "Name" name="name" value={formulario.name.first} placeholder= 'Name' onChange={handleChange}/>
                    <Input label= "Last Name" name="lastname" value={formulario.name.last} placeholder= 'Last Name' onChange={handleChange}/>
                    <Input label= "Phone" name="numberphone" value={formulario.cell} placeholder= 'Number Phone' onChange={handleChange}/>
                    <Input label= "Email" name="email" value={formulario.email} placeholder= 'Email' onChange={handleChange}/>
                    <Input label= "City" name="city" value={formulario.location.city} placeholder= 'City' onChange={handleChange}/>
                    <Input label= "State" name="state" value={formulario.location.state} placeholder= 'State' onChange={handleChange}/>
                    <Input label= "UserName" name="username" value={formulario.login.username} placeholder= 'User Name' onChange={handleChange}/>
                    <submit className="submit">Enviar</submit>
                </form>        
            </Container>
        </div>
    )
}

