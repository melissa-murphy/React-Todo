// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
    return (
        <div className="task-list">
            {props.tasks.map(item => (
                <Todo key={item.id} item={item} taskDone={props.taskDone} />
            ))}
        </div>
    )
}
