import React, {useState} from "react";
import ToDoList from "./todoList";
import FormToDO from "./formTodo";
const HomePage = () => {
    const [title, setTitle] = useState('Hello');
    /**
     *     [
     *      id: 'djhd'
     *      name: 'homework',
     *      time:345657889
     *     ]
     *
     */
    const [toDos, setToDos] = useState<any[]>([])
    const addToDo = (todo: any) => {
        console.log(todo);
        const toEditTodo = [...toDos];
        toEditTodo.push(todo);
        setToDos(toEditTodo)
    }

    const deleteToDO = () => {
        const toEditTodo = [...toDos];
        toEditTodo.pop();
        setToDos(toEditTodo)
    }
    return (
        <div>
            <FormToDO submitToDos={addToDo}/>
            {toDos.length === 0 ? (
                <h5>No pending todos</h5>
            ) : (
                <ul>
                    {
                        toDos.map((todo,) => {
                            return (
                                <ToDoList key={todo.id} todoApp={todo} title={'sbnmghugfy'}/>
                            )
                        })
                    }
                </ul>
            )}


            <button onClick={addToDo}>Add</button>
            <button onClick={deleteToDO}>Delete</button>
        </div>

    )
}

export default HomePage
