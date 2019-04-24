// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";



function TodoList(props) {
  return (
    <div>


        {props.todoList.map(todoItem => (
          <Todo 
          todo={todoItem}
          key={todoItem.task} />
        ))}
      
    </div>
}
}

export default TodoList;
