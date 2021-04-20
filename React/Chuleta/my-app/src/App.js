
import './App.css';
import FirstComponet, {SecondComponent, ThirdComponent} from './componets/FirstComponet';
//Si tenemos otro componente en otro archivo necesitamos crear otra linea con la ruta del archivo
function App() {
  return (
    <div className="App">
      <FirstComponet title ="Titulo enviado desde el padre" date="16 Agosto 2021"/>
      <FirstComponet title ="Otro Titulo" date="Otra Fecha"/>
      <SecondComponent/>
      <ThirdComponent/>
    </div>
  );
}

export default App;
