import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.addTask}>
      <input
        name="todo"
        value={props.value}
        type="text"
        onChange={props.inputChangeHandler}
        placeholder="enter task"
      />
      <button>add</button>
      <button>remove completed</button>
    </form>
  );
};

export default TodoForm;
