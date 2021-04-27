import {useState} from "react";

export default function NewTodo({setTodosa}) {
    const [newTodo, setNewTodo] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        setTodosa(currentTodos=> [{title: newTodo}, ...currentTodos]);

        setNewTodo("");
    }
    return (
        <form onSubmit={handleSubmit} className="my-4 mx-4">
            <input type="text" 
            placeholder="Introduce un nuevo To-Do"
            className="form-control" 
            onChange={e => setNewTodo(e.target.value)}
            value={newTodo}
            />
        </form>
    )
}
