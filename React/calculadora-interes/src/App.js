import styled from 'styled-components'
import {Formik, Form} from 'formik'
import Input from './components/Input'

const Container = styled.div `
display: flex;
justify-content: center;
height: 100%
align-items: center;
`

const Section = styled.section `
background-color: #eee;
border-top: solid 2px palevioletred;
padding: 20px 25px;
width: 500px;
box-shadow: 0px 2px 3px rgb(0,0,0,0.3)
`


function App() {
  const handleSubmit = () => {}
  return (
    <Container>
      <Section>
        <Formik 
        
          initialCalues={{
            deposito: '',
            contribucion: '',
            años: '',
            interes: '',
        }}
        onSubmit={handleSubmit}>
          <Form>
            <Input name="deposit" label="Deposito Inicial"></Input>
          </Form>
            
        
        </Formik>
      </Section>
    </Container>
  );
}

export default App;
