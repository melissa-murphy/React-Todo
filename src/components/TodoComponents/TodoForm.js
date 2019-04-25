import React from "react";

export default function TodoForm(props) {
  return (
    <div className="todo-form">
      <form>
        <input
          placeholder="enter new task"
          type="text"
          onChange={props.handleTaskChange}
          value={props.taskName}
          name="taskName"
        />
        <button onClick={props.addTodo}>add task</button>
       
      </form>
    </div>
  );
}
