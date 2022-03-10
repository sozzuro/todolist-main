import React from 'react';
import {TaskType} from "./App";
import TodoListHeader from "./TodoListHeader";
import TodoListButton from "./TodoListButton";
import TasksList from "./TasksList";

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTasks: (id: number) => void
}

const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input/>
                <button>+</button>
            </div>
            <TasksList tasks={props.tasks} removeTasks={props.removeTasks}/>
            <div>
                <TodoListButton title={'All'}/>
                <TodoListButton title={'Active'}/>
                <TodoListButton title={'Completed'}/>
            </div>
        </div>
    );
};

export default TodoList;