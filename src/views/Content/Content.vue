<template>
  <div id="app">
    <van-nav-bar
      title="标题"
      left-text="返回"
      
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="Content-main">
      <h3>{{title}}</h3> 
      <p>页面ID: {{id}}</p>
      <div v-html="text"></div>
    </div>

    <Tabbar />
  </div>
</template>

<script type="javascript">
// import Grid from "./Grid";
import Tabbar from "@/components/Tabbar.vue";

import Vue from "vue";

import { NavBar } from "vant";

Vue.use(NavBar);

export default {
  name: "Content",
  components: {
    Tabbar
  },
  data() {
    return {
      title: "这是文章的标题",
      text: `
      <p> 这里是文章的内容 html 结构的</p>
      <p> 这里是文章的内容 html 结构的</p>
      <p> 这里是文章的内容 html 结构的</p>
      <p> 这里是文章的内容 html 结构的</p>
      <p> 这里是文章的内容 html 结构的</p>
      <p> 这里是文章的内容 html 结构的</p>
      <p> 这里是文章的内容 html 结构的</p>
      <p> 这里是文章的内容 html 结构的</p>
      <p> 这里是文章的内容 html 结构的</p>
      <h4>测试内容</h4>
      `,
      id:0,
    };
  },
  created: function() {
    this.id=this.$route.query.id;
    // 向后台发起ajax请求
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    },
    
  }
};
</script>

<style >
.Content-main {
  padding: 12px;
}
.Content-main h3 {
  text-align: center;
}
</style>
