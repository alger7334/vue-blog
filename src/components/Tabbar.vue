<template>
  <div class="tabbar">
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" replace to="/">主页</van-tabbar-item>
      <van-tabbar-item icon="search" replace to="/Essay">随笔</van-tabbar-item>
      <van-tabbar-item icon="friends-o" replace to="/Code">代码</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: "Tabbar",
  data() {
    return {
      active: 0
    };
  }
};
</script>
<style lang="stylus">