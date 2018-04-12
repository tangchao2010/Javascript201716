<template>
    <div class="detail">
      <MyHeader  back="true">详情</MyHeader>
        <ul class="bookUl">
          <li>
            <label for="bookName">书的名称</label>
            <input type="text" v-model='book.bookName' id="bookName">
          </li>
          <li>
            <label for="bookInfo">书的信息</label>
            <input type="text" v-model='book.bookInfo' id="bookInfo">
          </li>
          <li>
            <label for="bookPrice">书的价格</label>
            <input type="text" v-model='book.bookPrice' id="bookPrice">
          </li>
        </ul>
      <button @click="update">确认修改</button>
    </div>
</template>

<script>
    // 默认导出一个对象
    import  MyHeader from  '../base/header.vue';
    // 通过解构赋值获取api中的getOneBook 方法；
    import  {getOneBook,updateBook}  from  '../api';
    export default {
        data(){
            return {book: {},bid:''}
        },
        created(){
            //  this  --> 指向当前的组件实例；
          // $router : 方法
          // $route: 存储的是属性和参数；
//          console.log(this.$route.params)
//          console.log(this.$route)
          // 在当前组件下获取当前组件的路由ID；
          this.bid = this.$route.params.bid;
          this.getOne(this.bid)
        },
        methods: {
            async getOne(id){
                this.book = await getOneBook(id);
                console.log(this.book)
            },
            async update(){
                await updateBook(this.book);
                this.$router.history.go(-1);
            }
        },
        components: {
          MyHeader
        },
        computed: {
//            bid(){
//                console.log(this.$route.params)
//            }
        }
    }
</script>

<style scoped lang="less">
    .detail{
      position:fixed;
      top:40px;
      left:0;
      bottom:0;
      right:0;
      background: #ffffff;
      z-index: 100;
      .bookUl li{
          width:100%;
          /*height:60px;*/
          padding:10px;
          box-sizing: border-box;
           label{
             display: block;
             width:100px;
             height:30px;
             font-size: 25px;
             font-weight: bold;
             margin-bottom:10px;
             margin-top: 10px;
           }
           input{
             display: block;
             height:30px;
             width:80%;
             padding-left:10px;

           }
      }
      button{
        display: block;
        width:70px;
        height:35px;
        background: red;
        color:white;
        line-height: 35px;
        text-align: center;
        margin: 30px 20px;
        border-radius: 5px;
        border: none;
      }
    }
</style>
