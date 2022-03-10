import React, {FC} from 'react';
import {TaskType} from "./App";

type TasksListPropsType = {
    tasks: Array<TaskType>,
    removeTasks: (id: number) => void
}

const TasksList: FC<TasksListPropsType> = (
    {
        tasks,
        removeTasks
    }) => {

    const tasksJSXElements = tasks.map((t) => {
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={() => removeTasks(t.id)}>x</button>
            </li>
        )
    })

    return (
        <ul>
            {tasksJSXElements}
        </ul>
    );
};

export default TasksList;