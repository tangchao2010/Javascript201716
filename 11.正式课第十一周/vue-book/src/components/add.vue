<template>
  <div class="detail">
    <MyHeader>添加</MyHeader>
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
      <li>
        <label for="bookCover">书的封面</label>
        <input type="text" v-model='book.bookCover' id="bookCover">
      </li>
    </ul>
    <button @click="add">添加</button>
  </div>
</template>

<script>

  import  MyHeader from  '../base/header.vue';
  import  {addBook}  from  '../api';
  export default {
    data(){
      return {book: {}}
    },
    created(){

    },
    methods: {
        async  add(){
            await addBook(this.book);
            this.$router.history.push('/list')
        }
    },
    components: {
      MyHeader
    },
    computed: {

    }
  }
</script>

<style scoped lang="less">
  .detail{
    position:absolute;
    top:0;
    left:0;
    bottom:50px;
    right:0;
    background: #ffffff;
    z-index: 100;
    .bookUl li{
      width:100%;
      padding:10px;
      box-sizing: border-box;
      label{
        display: block;
        width:100px;
        height:20px;
        font-size: 25px;
        margin-bottom:20px;
        margin-top: 10px;
      }
      input{
        display: block;
        height:25px;
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
