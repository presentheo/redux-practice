import { ADD_TODO } from '../actions/ActionTypes';

export let initialState = {
  todos: []
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
  
    default: return state;
  }
}