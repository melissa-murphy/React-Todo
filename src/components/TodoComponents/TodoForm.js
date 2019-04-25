import React from "react";

export default function TodoForm(props) {
  return (
    <div className="todo-form">
      <form>
      <label class="label" name="enter new task"></label>
        <input
          placeholder="enter new task"
          type="text"
          onChange={props.handleTaskChange}
          value={props.taskName}
          name="taskName"
        />
        <br />
        <button className="button is-large" onClick={props.addTodo}>add task</button>
       
      </form>
    </div>
  );
}
