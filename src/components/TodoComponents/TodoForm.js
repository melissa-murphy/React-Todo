import React from "react";

export default function TodoForm(props) {
  return (
    <div className="todo-form">
      <form>
        <label className="label" name="enter new task" />
        <input
          className="input"
          placeholder="enter new task"
          type="text"
          onChange={props.handleTaskChange}
          value={props.taskName}
          name="taskName"
        />
        <br />
        <button className="button is-large is-fullwidth is-primary has-text-white" onClick={props.addTodo}>
          add task
        </button>
      </form>
    </div>
  );
}
