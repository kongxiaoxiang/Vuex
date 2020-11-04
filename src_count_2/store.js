import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//状态对象
const state = {
  count:0
}
//包含多个事件回调函数的对象
const actions = {
  //增加的actions
  increment({commit}){
    commit('INCREMENT')
  },
  //减少的actions
  decrement({commit}){
    commit('DECREMENT')
  },
  //含有条件的actions
  incrementIfOdd({commit,state}){
    if(state.count %2 !== 0){
      commit('INCREMENT')
    }
  },
  //异步actions
  incrementAsync({commit}){
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000);
  }
}
//包含多个更新state函数的对象
const mutations = {
  //增加的mutations
  INCREMENT(state){
    state.count++
  },
  //减少的mutations
  DECREMENT(state){
    state.count--
  }
}
//包含多个getter计算属性函数的对象
const getters = {
  evenorodd(state){
    return state.count%2 === 0 ? 'even':'odd'
  }
}

export default new Vuex.Store ({
  state,
  actions,
  mutations,
  getters
})