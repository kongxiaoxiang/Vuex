import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './css/base.css'


new Vue({
  el:'#app',
  render:h => h(App),
  store
})