<template>
    <div>
      <MyHeader>首页</MyHeader>
      <loading v-if="loading">疯狂加载中</loading>
      <template v-else>
        <Swiper :swiperSlide="sliders"></Swiper>
        <div class="container">
          <h3>热门图书</h3>
          <ul>
            <li v-for="(item,index) in  hotBook">
              <img :src="item.bookCover" alt="">
              <b>{{item.bookName}}</b>
            </li>
          </ul>
        </div>
      </template>

    </div>
</template>

<script>
    // 默认导出一个对象
    import  Swiper from  '../base/swiper.vue';
    import  MyHeader from  '../base/header.vue';
    import loading from  '../base/loading.vue';
    //解构赋值获取api中的方法；
    import  {getSlider,getHotBook,getall} from  '../api'
    export default {
        data(){
            return {sliders: [],hotBook:[],loading:true}
        },
        created(){
            // 初始化实例调用了slider
              this.getAll();
        },
        methods: {
//            async slider(){
//                this.sliders=await  getSlider();
//                // 不同的端口去访问另一个端口的数据，属于跨域请求；请求不到数据；
////              console.log(this.sliders);
//            },
//            async  getHot(){
//                this.hotBook = await  getHotBook();
//
//            },
            async getAll(){
//              console.log(await getall());
              // 会等待getAll 执行完成之后，再继续；
              let [sliders,hotBook]=await getall();
                this.sliders = sliders;
                this.hotBook = hotBook;
                this.loading = false;
            }
        },
        components: {
          MyHeader,Swiper,loading
        },
        computed: {

        }
    }
</script>

<style scoped lang="less">
   .container {
     h3{
       display: block;
       height:30px;
       line-height: 30px;
       font-weight: bold;
       padding-left:10px;
       width: 100%;
     }
     ul li{
       width:50%;
       display: inline-block;
       margin-bottom: 10px;
       img{
         width:100%;
       }
       b{
         padding-left:20px;
       }
     }

   }
</style>
