<template>
    <div>
        <count></count>
    </div>
</template>

<script>
    // 默认导出一个对象
    import count  from './components/count.vue';
    export default {
        data(){
            return {msg: "hello"}
        },
        methods: {},
        components: {count},
        computed: {}
    }
</script>

<style scoped>
    #app {

    }
</style>
