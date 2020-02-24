<template>

<div class="banner">
 <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
</div>

</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

import 'vant/lib/swipe/style';
Vue.use(Swipe);
Vue.use(SwipeItem);


export default {
  name: "Banner",
  components: {},
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  }
};
</script>

<style lang="stylus">
.banner
    width 100%
    height 150px
    overflow hidden
    background red
    img 
        width 100%
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
