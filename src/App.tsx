import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";


export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

function App() {
    const todoListTitle_1: string = "What to learn";

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JavaScript', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ])

    let currentTasks = tasks;
    const removeTasks = (id: number) => {
        currentTasks = tasks.filter(t => t.id !== id)
        setTasks(currentTasks);
        console.log(tasks)
    }


    return (
        <div className="App">
            <TodoList
                title={todoListTitle_1}
                tasks={tasks}
                removeTasks={removeTasks}
            />
        </div>
    );
}

export default App;
