import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasksTemplate = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasksOnState: tasksTemplate,
      task: {
        taskName: '',
        id: '',
        completed: false
      }
    };
  }

  handleChanges = event => {
    this.setState({
      task: {
        ...this.state.task,
        [event.target.name]: event.target.value
      }
    });
  };

  addTask = event => {
    event.preventDefault();
    console.log(this.state.tasksOnState);
    const newTask = {
      taskName: this.state.task.taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasksOnState: [...this.state.tasksOnState, newTask],
      task: {
        taskName: '',
        id: '',
        completed: false
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasksOnState} />
        <TodoForm
          addTask={this.addTask}
          handleTaskChange={this.handleChanges}
          addTodo={this.addTask}
          taskName={this.state.task.taskName}
        />
      </div>
    );
  }
}

export default App;
