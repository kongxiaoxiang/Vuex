<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
     @keyup.enter="addTodo" v-model="title"/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title:''
      }
    },
    methods:{
      addTodo(){
        if(!this.title.trim()){
          alert('请在输入框内输入合法内容')
          return
        }
        const todo = {
          title:this.title,
          complete:false
        }
        this.$store.dispatch('addTodo',todo)
        this.title = ''
      }

    }
  };
</script>

<style>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>