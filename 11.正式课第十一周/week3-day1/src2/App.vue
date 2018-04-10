<template>
    <div class="header">
          123
        <button @click="fn">{{msg}}</button>
    </div>
</template>
<script>

    export default {
        data(){
            // 对象数据类型，return + {}
            return {msg:"你很帅"}
        },
        methods:{
            fn(){
                alert(1)
            }
        },
        components:{

        }

    }
</script>
<style  scoped  lang="less">
    /*让当前样式变成私有scoped*/
    /*lang="less",支持less语法；*/
    /*全局样式*/
    .header{

            width:300px;
            line-height: 100px;
            height:100px;
            background: lightblue;
            margin:auto;

    }
    /**{*/
        /*margin:0;*/
        /*padding:0;*/
    /*}*/
    /*a{text-decoration: none}*/
    /*ul{list-style: none}*/

</style>
