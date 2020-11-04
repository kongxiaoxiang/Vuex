<template>
  <div>
    click {{count}} times,count is {{evenorodd}} <br>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        count:0
      }
    },
    computed:{
      evenorodd(){
        return this.count%2 === 0 ? 'even':'odd'
      }
    },
    methods:{
      increment(){
        this.count = ++this.count
      },
      decrement(){
        this.count = --this.count
      },
      incrementIfOdd(){
        if(this.count %2 !==0){
          this.count = ++this.count
        }
      },
      incrementAsync(){
        setTimeout(() => {
          this.count = ++this.count
        }, 1000);
      },
    }
  }
</script>

<style>

</style>