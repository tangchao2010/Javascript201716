<template>
    <div class="a">
        {{msg}}
        <!--需要路由；-->
        <router-view></router-view>
        <button @click="show">说实话</button>
    </div>
</template>

<script>
    // 默认导出一个对象
    export default {
        data(){
            return {msg: "hello"}
        },
        methods: {
            show(){
                //console.log(this);// 组件的实例；
                this.$notify({delay:1000});
            }
        },
        components: {},
        computed: {}
    }
</script>

<style scoped>

</style>
