// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <div>
      <h1>Todo List</h1>
      <p className="todo-item">
        {props.todoItems.map(todoItem => (
          <Todo todo={todoItem} key={todoItem.task} />
        ))}
      </p>
    </div>
  );
}

export default TodoList;
