import React from 'react';

const TodoForm = props => {
  return (
    <div className="todo-form">
     
      <form>
        <input
          placeholder="Task Description"
          type="text"
          onChange={props.handleDescriptionChange}
          value={props.desc}
          name="description"
        />
        <button onClick={props.addTodo}>add task</button>
        <button>clear complted tasks</button>
      </form>
    </div>
  );
};

export default TodoForm;
