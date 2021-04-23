
import './App.css';
import FirstComponet, {SecondComponent, ThirdComponent} from './componets/FirstComponet';
import Counter from "./componets/Counter";
import UseEffectComponent from "./componets/UseEffectComponent";
import { useState } from 'react';
//Si tenemos otro componente en otro archivo necesitamos crear otra linea con la ruta del archivo
function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show && <UseEffectComponent/>}
      <button onClick={() => setShow(!show)}>Show</button>
      <FirstComponet title ="Titulo enviado desde el padre" date="16 Agosto 2021"/>
      <FirstComponet />
      <SecondComponent/>
      <ThirdComponent/>
      <Counter/>
      <UseEffectComponent/>
    </div>
  );
}

export default App;
