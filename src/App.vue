<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :ADDTODO='ADDTODO'/>
      <List :todos='todos' :delteItem='delteItem'/>
      <Footer :todos='todos' :deleteCompTask='deleteCompTask' :check='check'/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import List from './components/List'
  import Footer from './components/Footer'
  import utilstorage from './util/utilstorage'
  export default {
    data(){
      return {
        todos:utilstorage.READ_TODOS()
      }
    },
    components:{
      Header,
      List,
      Footer
    },
    methods:{
      ADDTODO(todo){
        this.todos.unshift(todo)
      },
      delteItem(index){
        this.todos.splice(index,1)
      },
      //清除已经完成的任务
      deleteCompTask(){
        this.todos = this.todos.filter (todo => !todo.complete)
      },
      //全选/全不选
      check(isCheck){
        this.todos.forEach(todo => todo.complete = isCheck)
      }
    },
    watch:{
      todos:{
        deep:true,
        handler:utilstorage.SAVE_TODOS
      }
    }
  }
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>