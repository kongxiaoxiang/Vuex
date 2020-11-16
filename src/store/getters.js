export default {
  totalCount(state){
    return state.todos.length
  },
  completeCount(state){
    return state.todos.reduce((pre,todo) => pre + (todo.complete?1:0),0)
  },
  isCheckAll(state,getters){
    return getters.totalCount === getters.completeCount && state.todos.length>0
  }
}