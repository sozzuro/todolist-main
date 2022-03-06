import React from 'react';
import {TaskType} from "./App";
import TodoListHeader from "./TodoListHeader";
import TodoListButton from "./TodoListButton";
import TasksList from "./TasksList";

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
}

const TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            <TodoListHeader title={props.title}/>
            <div>
                <input/>
                <button>+</button>
            </div>
            <TasksList tasks={props.tasks}/>
            <div>
                <TodoListButton title={'All'}/>
                <TodoListButton title={'Active'}/>
                <TodoListButton title={'Completed'}/>
            </div>
        </div>
    );
};

export default TodoList;