<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont  icon-daohangshouye"></i>
        首页
      </router-link>
      <router-link to="/list">
        <i class="iconfont  icon-chazhaobiaodanliebiao"></i>
        列表
      </router-link>
      <router-link to="/collect">
        <i class="iconfont  icon-collection-b"></i>
        收藏
      </router-link>
      <router-link to="/add">
        <i class="iconfont  icon-icon--"></i>
        添加
      </router-link>
    </div>
</template>

<script>
    // 默认导出一个对象
    export default {
        data(){
            return {msg: "hello"}
        },
        methods: {},
        components: {},
        computed: {}
    }
</script>

<style scoped lang="less">
    .footer{
      border-top:1px solid #ccc;
      position: fixed;
      height:50px;
      bottom: 0;
      left:0;
      width:100%;
        a{
          width:23.5%;
          display: inline-block;
          height:50px;
          line-height: 50px;
          vert-align: middle;
          text-align: center;
        }
      a.router-link-active{
        color:red;
      }
    }
</style>
