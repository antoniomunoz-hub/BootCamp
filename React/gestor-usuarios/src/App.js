import useFormulario from './hooks/useFormulario'


function App(){
  const [formulario, handleChange] = useFormulario({name: ''})

  console.log(formulario);
  return (
    <form>
    </form>
  )
}

export default App