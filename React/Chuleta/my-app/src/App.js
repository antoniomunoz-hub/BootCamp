
import './App.css';
import FirstComponet, {SecondComponent, ThirdComponent} from './componets/FirstComponet';
import Counter from "./componets/Counter";
//Si tenemos otro componente en otro archivo necesitamos crear otra linea con la ruta del archivo
function App() {
  return (
    <div className="App">
      <FirstComponet title ="Titulo enviado desde el padre" date="16 Agosto 2021"/>
      <FirstComponet />
      <SecondComponent/>
      <ThirdComponent/>
      <Counter/>
    </div>
  );
}

export default App;
