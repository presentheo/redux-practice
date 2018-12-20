import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: ''      
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, index) => {
            return (
              <li key={index}
              >{todo.text}
                <button onClick={() => this.props.onRemoveClick(index)}>remove</button>
              </li> 
            )
          })}
        </ul>
        <div className='add-todo'>
          <input onChange={(e) => {this.setState({text: e.target.value})}}></input>
          <button onClick={() => this.props.onAddClick(this.state.text)}>insert</button>
        </div>
      </div>
    );
  }
}

export default TodoList;

