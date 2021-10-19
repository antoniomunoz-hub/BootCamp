import { useState } from 'react'
import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'


function App(){
  const [users, setUsers] = useState([])
  const [formulario, handleChange, reset] = useFormulario({name: '', lastname: '', email: ''})
  const submit = e => {
    e.preventDefault()
    setUsers([...users, formulario])
    reset()
  }
  
  return (
    <div style={{marginTop: '15%'}}>
      <Container>
        <Card>
          <div style={{padding: 20}}>
            <form onSubmit={submit}>
              <Input label= "Nombre" name="name" value={formulario.name} placeholder= 'Nombre' onChange={handleChange}/>
              <Input label= "Apellido" name="lastname" value={formulario.lastname} placeholder= 'Apellido' onChange={handleChange}/>
              <Input label= "Correo" name="email" value={formulario.email} placeholder= 'Correo' onChange={handleChange}/>
              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {users.map(user => 
              
              <li key={user.email}>
                
                {`${user.name} ${user.lastname} ${user.email}`}

              </li>)}
          </ul>
        </Card>
      </Container>
    </div>

  )
}

export default App