import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import './App.css';

const todoTasks = [
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
  constructor(props) {
    super(props);
    this.state = {
      tasksOnState: todoTasks,
      todos: [
        {
          task: '',
          id: '',
          completed: false
        }
      ],
      todo: ''
    };
  }

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    return (
      <div className="todo-list-container">
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.tasksOnState} />
        <TodoList todos={this.state.todos} />
        <TodoForm todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
