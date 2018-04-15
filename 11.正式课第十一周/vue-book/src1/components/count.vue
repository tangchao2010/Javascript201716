<template>
    <div>
      <button @click="minu">-</button>
        {{$store.state.count}}
      <button @click="increase">+</button>
      {{$store.getters.val}}
    </div>
</template>

<script>
    // 默认导出一个对象
    import * as  Types from '../store/mutations-type'
    export default {
        data(){
            return {msg: "hello"}
        },
        methods: {
          minu(){
              // payload : 载荷 ;第二个参数；
             this.$store.commit(Types.ADD_COLLECT,2)
          },
          increase(){
            this.$store.commit('add')
          }
        },
        components: {},
        computed: {}
    }
</script>

<style scoped>
    #app {

    }
</style>
