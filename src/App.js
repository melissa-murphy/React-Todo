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
      todoTasks: [],
      todos: {
        task: '',
        id: '',
        completed: false
      }
    }; // Bindings
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  } // Methods

  inputChangeHandler = event => {
    this.setState({
      tasksOnState: {
        ...this.state.todoTasks,
        [event.target.name]: event.target.value
      }
    });
  };

  // handleChanges = event => {
  //   console.log(event.target.name);
  //   this.setState({
  //     student: {
  //       ...this.state.student,
  //       [event.target.name]: event.target.value
  //     }
  //   });
  // };

  addTask = event => {
    event.preventDefault();
    this.setState({
      todos: [...this.state.tasksOnState, this.state.todos]
    });
  };

  // addStudent = event => {
  //   event.preventDefault();
  //   this.setState({
  //     studentsOnState: [...this.state.studentsOnState, this.state.student],
  //     student: {}
  //   });
  // };

  render() {
    return (
      <div className="todo-list-container">
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.tasksOnState} />
        <TodoForm
          todos={this.state.todos}
          value={this.state.todo}
          inputChangeHandler={this.inputChangeHandler}
          addTask={this.addTask}
        />
      </div>
    );
  }
}

export default App;
