<template>
    <div>
        add
      <MyHeader>添加</MyHeader>
    </div>
</template>

<script>
    // 默认导出一个对象
    // 组件的三部曲： 导入  注册 使用；
    import  MyHeader from  '../base/header.vue'
    export default {
        data(){
            return {}
        },
        methods: {},
        components: {MyHeader},
        computed: {}
    }
</script>

<style scoped>
    #app {

    }
</style>
