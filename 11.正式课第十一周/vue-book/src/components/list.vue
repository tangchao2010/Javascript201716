<template>
    <div>
      <MyHeader>列表</MyHeader>
       <ul>
         <router-link
           v-for="(item,index) in  allBook"
           :to="{name:'/detail',params:{bid:item.bookId}}"
           tag="li"
           :key='index'>
           <img :src="item.bookCover" alt="">
           <div class="right">
             <h3>{{item.bookName}}</h3>
             <p>{{item.bookInfo}}</p>
             <p class="price">{{item.bookPrice}}</p>
             <button class="btn"  @click.stop="remove(item.bookId)">删除</button>
             <button class="btn btn-blue"  @click.stop="collect(item)">收藏</button>
           </div>
         </router-link>

       </ul>
    </div>
</template>

<script>
    // 默认导出一个对象
    import MyHeader from  '../base/header.vue'
   import {getBooks,removeBook,collectBook} from  '../api';
    export default {
        data(){
            return {allBook: []}
        },
        created(){
              this.getBook();
        },
        methods: {
            async getBook(){
                this.allBook= await  getBooks();
//              console.log(this.allBook);
            },
            async remove(bookId){
                await removeBook(bookId);
                this.allBook=this.allBook.filter(item=>item.bookId!=bookId)
            },
            async collect(current){
                await  collectBook(current);
            }
        },
        components: {
          MyHeader
        },
        computed: {}
    }
</script>

<style scoped lang="less">
     ul li{
       width:100%;
       box-sizing: border-box;
       list-style: none;
       padding:5px;
       display: flex;
       img{
         width:140px;
       }
       .right{
         float: right;
       }
       p{line-height: 25px}
       .price{
         color:red;
         font-size: 20px;
       }
       .btn{
         width:60px;
         height:30px;
         text-align: center;
         line-height: 20px;
         background: red;
         border-radius: 10px;
         color:white;
         border:none;
       }
       .btn.btn-blue{
         background: green;
       }
       div{
         padding-top:20px;
         padding-left:5px;
       }
     }
</style>
