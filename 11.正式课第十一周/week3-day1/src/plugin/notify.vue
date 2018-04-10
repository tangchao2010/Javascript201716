<template>
    <div class="modal">
        {{msg}}
    </div>
</template>

<script>
    // 默认导出一个对象
    export default {
        data(){
            return {msg: "你很帅"}
        },
        methods: {},
        components: {},
        computed: {}
    }
</script>

<style scoped>
    .modal{
        width:200px;
        height:200px;
        border-radius: 20px;
        text-align: center;
        line-height: 200px;
        background: lightblue;
    }
</style>
