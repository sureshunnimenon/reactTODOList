import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Todos from './Todos'
import Addtodo from './Addtodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy some milk"},
      {id: 2, content: "Play Mario game "}
    ]
  }

  deleteTodo = (id) => {
    // console.log(id)
    const todos = this.state.todos.filter(todo => todo.id !== id )
    this.setState({todos})
  }

  addtodo = (todo) => {
    console.log(todo)
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({todos})
  }
  render() {
    return (
      <div className="todo-app container">
          <h3 className="center blue-text"> To Do App </h3>
          <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo} /> 

          <Addtodo addtodo={this.addtodo} /> 
      </div>
    );
  }
}

export default App;
