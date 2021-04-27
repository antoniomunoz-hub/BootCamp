import {useState, useEffect} from "react";
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App() {
  const [todos, setTodos] = useState([]);

  const API_TODOS = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

  useEffect(() => {
   fetch(API_TODOS)
    .then(responsive => responsive.json())
    .then(data => setTodos(data.slice(0, 20)));
  }, [])

  return (
    <div className="App">
      <h1>Todo List</h1>
     <TodoList todos={todos} setTodos={setTodos}/>
     <NewTodo/>
    </div>
  );
}

export default App;
