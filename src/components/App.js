import React, { Component } from 'react';
import { createStore } from 'redux';
import { initialState, todoApp } from '../reducers/reducer';
import { addTodo } from '../actions';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList 
          todos={initialState.todos}
          onAddClick={(text) => store.dispatch(addTodo(text))}
        />
      </div>
    );
  }
}

let store = createStore(todoApp);

store.subscribe(() => {
  console.log(store.getState());
})


export default App; 