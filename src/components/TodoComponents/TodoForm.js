import React from 'react';

const TodoForm = props => {
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
        <button>clear completed tasks</button>
      </form>
    </div>
  );
};

export default TodoForm;
