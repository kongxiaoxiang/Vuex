import {ADD_TODO,DELETE_TODO} from './mutations-types'
export default {
  [ADD_TODO](state,{todo}){
    state.todos.unshift(todo)
  },
  [DELETE_TODO](state,{index}){
    state.todos.splice(index,1)
  },
  ISCHECK(state,{value}){
    state.todos.forEach(todo => todo.complete = value)
  },
  DELETECOMPTASK(state){
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  REQTODOS(state,todos){
    state.todos = todos
  }
}