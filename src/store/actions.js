import {ADD_TODO,DELETE_TODO} from './mutations-types'
import utilstorage from '../util/utilstorage'
export default {
  addTodo({commit},todo){
    commit(ADD_TODO,{todo})
  },
  deleteTodo({commit},index){
    commit(DELETE_TODO,{index})
  },
  isCheck({commit},value){
    commit('ISCHECK',{value})
  },
  deleteCompTask({commit}){
    commit('DELETECOMPTASK')
  },
  reqTodos({commit}){
    setTimeout(() => {
      const todos = utilstorage.READ_TODOS()
      commit('REQTODOS',todos)
    }, 1000);
  }
}