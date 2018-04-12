<template>
  <div class="header">
    <slot></slot>
    <i class="iconfont  icon-fanhui" v-if="back" @click="goBack"></i>

  </div>
</template>

<script>
    // 默认导出一个对象
    export default {
        data(){
            return {

            }

        },
      props:['back'],
      methods: {
        goBack(){
            this.$router.history.go(-1);// 返回上一次的路由；
          // push : 直接到哪个路由
//          this.$router.history.push('/home')
//          console.log(this.$router);
          // $router : 存储的是方法
          // $route : 存储的是一些属性；
        }
      },
      components: {},
      computed: {}
      }
</script>

<style scoped lang="less">
    .header{
      height:40px;
      background: lightblue;
      width:100%;
      position: fixed;
      top:0;
      left:0;
      text-align: center;
      font-weight: bold;
      vertical-align: middle;
      line-height: 40px;
      i{
        position: fixed;
        left:10px;

      }
    }
</style>
