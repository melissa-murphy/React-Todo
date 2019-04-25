import React from 'react';

function TodoForm(props) {
  return (
    <form>
      <input placeholder="enter task" />
      <button type="submit">add</button>
    </form>
  );
};

export default TodoForm;
