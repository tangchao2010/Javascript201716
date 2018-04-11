<template>
    <div>
      <MyHeader>收藏</MyHeader>
       collect
    </div>
</template>

<script>
    // 默认导出一个对象
    import  MyHeader from  '../base/header.vue'
    export default {
        data(){
            return {msg: "hello"}
        },
        methods: {},
        components: {
          MyHeader
        },
        computed: {}
    }
</script>

<style scoped>
    #app {

    }
</style>
