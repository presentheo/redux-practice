import * as types from './ActionTypes';

export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
    text
  }
}
export const removeTodo = (index) => {
  return {
    type: types.REMOVE_TODO,
    index
  }
}