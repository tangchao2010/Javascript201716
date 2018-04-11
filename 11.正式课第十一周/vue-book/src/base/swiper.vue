<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,key) in swiperSlide" :key="key">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carousel',
    props:['swiperSlide'],
    data() {
      return {
        swiperOption: {
            autoplay:2000,
             loop:true,
             pagination: {
              el: '.swiper-pagination'
            }
        }
      }
    },
//    mounted() {
//      setInterval(() => {
//        console.log('simulate async data')
//        if (this.swiperSlides.length < 10) {
//          this.swiperSlides.push(this.swiperSlides.length + 1)
//        }
//      }, 3000)
//    }
  }
</script>
<style scoped>
    img{
      width:100%;
    }


</style>
