import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo } from '../actions';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList 
          todos={this.props.todos}
          onAddClick={(text) => this.props.onAddTodo(text)}
          onRemoveClick={(index) => this.props.onRemoveTodo(index)}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {todos: state.todos};
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (text) => dispatch(addTodo(text)),
    onRemoveTodo: (index) => dispatch(removeTodo(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);