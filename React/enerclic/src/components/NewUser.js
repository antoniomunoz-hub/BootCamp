import React from 'react'
import Input from './Input'
import '../styles/NewUser.css'
import Container from './Container'
import useFormulario from '../hooks/useFormulario'
import { useState } from 'react'


export default function NewUser() {
    const [users, setUsers] = useState([])
    const [formulario, handleChange, reset] = useFormulario({name: '', lastname: '', email: '', numberphone: '', city: '', state: '', username: ''})
    const submit = e => {
      e.preventDefault()
      setUsers([...users, formulario])
      reset()
    }
    return (
        <div>
            <Container>
                <h2>Registra un nuevo Usuario</h2>
                <form onSubmit={submit}>
                    <Input label= "Name" name="name" value={formulario.name} placeholder= 'Name' onChange={handleChange}/>
                    <Input label= "Last Name" name="lastname" value={formulario.lastname} placeholder= 'Last Name' onChange={handleChange}/>
                    <Input label= "Phone" name="numberphone" value={formulario.numberphone} placeholder= 'Number Phone' onChange={handleChange}/>
                    <Input label= "Email" name="email" value={formulario.email} placeholder= 'Email' onChange={handleChange}/>
                    <Input label= "City" name="city" value={formulario.city} placeholder= 'City' onChange={handleChange}/>
                    <Input label= "State" name="state" value={formulario.state} placeholder= 'State' onChange={handleChange}/>
                    <Input label= "UserName" name="username" value={formulario.username} placeholder= 'User Name' onChange={handleChange}/>
                    <button>Enviar</button>
                </form>        
            </Container>
        </div>
    )
}

