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
  import {mapState,mapGetters,mapActions} from 'vuex'
  export default {
    computed:{
      ...mapState(['count']), 
      ...mapGetters(['evenorodd'])  //mapGetters()返回值 {evenorodd(){return this.$store.getters['evenorodd']}}
    },
    methods:{
      ...mapActions(['increment','decrement','incrementIfOdd','incrementAsync'])
    }
  }
  // export default {
  //   computed:{
  //     evenorodd(){
  //       return this.$store.getters.evenorodd
  //     }
  //   },
  //   methods:{
  //     increment(){ //通知vuex去增加   
  //       this.$store.dispatch('increment')  //触发store中对应的actions调用
  //     },
  //     decrement(){
  //       this.$store.dispatch('decrement')
  //     },
  //     incrementIfOdd(){
  //       this.$store.dispatch('incrementIfOdd')
  //     },
  //     incrementAsync(){
  //       this.$store.dispatch('incrementAsync')
  //     }
  //   }
  // }
</script>

<style>

</style>