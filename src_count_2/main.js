import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
  el:'#app',
  components:{App},
  template:'<App/>',
  store  //所有组件对象都会多一个属性 $store
})  