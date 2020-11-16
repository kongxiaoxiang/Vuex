<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header/>
      <List/>
      <Footer/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import List from './components/List'
  import Footer from './components/Footer'
  import utilstorage from './util/utilstorage'
  export default {
    mounted(){
      this.$store.dispatch('reqTodos')
    },
    components:{
      Header,
      List,
      Footer
    },
    // watch:{
    //   todos:{
    //     deep:true,
    //     handler:utilstorage.SAVE_TODOS
    //   }
    // }
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