import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={this.addItem}>
      <input name="todo" type="text" placeholder="enter task" />
      <button type="submit">add</button>
      <button>remove completed</button>
    </form>
  );
};

export default TodoForm;
