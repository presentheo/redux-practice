import { ADD_TODO, REMOVE_TODO } from '../actions/ActionTypes';

export let initialState = {
  todos: [
    {text: 'To Learn Redux'}
  ]
}

export const todoApp = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TODO:
    return Object.assign({}, state, {
      todos: [
        ...state.todos,
        {text: action.text}
      ]
    })

    case REMOVE_TODO:
    return Object.assign({}, state, {
      todos: [
        ...state.todos.slice(0, action.index),
        ...state.todos.slice(action.index+1, state.todos.length)
      ]
    })
  
    default: return state;
  }
}