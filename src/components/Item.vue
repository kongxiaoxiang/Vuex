<template>
  <li  @mouseenter="handler(true)" @mouseleave="handler(false)" :style='{background:blg}'>
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="del">删除</button>
  </li>
</template>

<script>
  export default {
    data(){
      return {
        blg:'',
        isShow:false
      }
    },
    props:{
      todo:Object,
      index:Number,
    },
    methods:{
      handler(isEnter){
        if(isEnter){
          this.blg = 'gray'
          this.isShow = true
        }else{
          this.blg = 'white'
          this.isShow = false
        }
      },
      del(){
        if(window.confirm(`你确定删除${this.todo.title}的评论吗`)){
          this.$store.dispatch('deleteTodo',this.index)
        }
      }
    }
  };
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>