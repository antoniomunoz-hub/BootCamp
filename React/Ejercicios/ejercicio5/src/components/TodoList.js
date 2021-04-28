import "./TodoList.css";

export default function TodoList({todos, setTodos}){
    const removeTodo = title => setTodos (todos.filter(todo=> todo.title !== title));

    const toggleCompleted = (e, index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }
    return (
        <ul className="list-group">
            {todos.map((todo, index) => {
                 return (
                    <li className={`list-group-item ${todo.completed ? "completed": ""}`} 
                        onClick={e => toggleCompleted(e, index)}>
                        Todo: {index}: {todo.title}
                        <button className="btn-btn-danger" onClick={()=> removeTodo(todo.title)}>X</button>
                    </li>
                )
            })}
        </ul>
    )
}