<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model='isCheckAll'/>
    </label>
    <span> <span>已完成{{completeCount}}</span> / 全部{{totalCount}} </span>
    <button class="btn btn-danger" v-show="completeCount>0"
      @click="deleteCompTask"
      >清除已完成任务</button>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    computed:{
      ...mapGetters(['totalCount','completeCount']),
      isCheckAll: {
        get(){
          return this.$store.getters.isCheckAll
        },
        set(value){
          this.$store.dispatch('isCheck',value)
        }
      }
    },
    methods:{
      ...mapActions(['deleteCompTask'])
    }
  };
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>