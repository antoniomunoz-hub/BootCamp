import './App.css';
import ToolList from './components/ToolList';
import AddTool from './components/AddTool';

function App() {

  const initialTool=[
    {userId:1, tittle:"Haz la cama", completed:"Yes"},
    {userId:2, tittle:"Recoje la cocina", completed:"Yes"},
    {userId:3, tittle:"Duchate", completed:"Yes"}
  ]

  const [tools, setTools] = useState(initialContacsState);

  return (
    <div className="App">
      <AddTool/>
      <ToolList tools={tools}/>
    </div>
  );
}

export default App;
