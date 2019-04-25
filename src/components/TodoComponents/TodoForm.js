import React from 'react';

const TodoForm = props => {
  return (
    <div className="todo-form">
      <form>
        <input
          placeholder="Task Description"
          type="text"
          onChange={props.handleTaskChange}
          value={props.desc}
          name="description"
        />
        <button onClick={props.addTodo}>add task</button>
        <button>clear completed tasks</button>
      </form>
    </div>
  );
};

export default TodoForm;
