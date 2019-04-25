import React from "react";

TodoForm = props => {
  return (
    <form>
      <input
        placeholder="New Task"
        value={this.props.task.name}
        onChange={this.handleChanges}
        name="task"
      />
      <button>Add Task</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
