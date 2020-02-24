<template>
  <div class="list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell class="list-item" v-for="(item,index) in list" :key="index"  :title='item.title' :value="item.time" />
        <!-- <div class="title">{{item.title}}</div>
        <div class="time">{{item.time}}</div> -->
      <!-- </van-cell> -->
    </van-list>
  </div>
</template>
<script>
import Vue from "vue";

import { List } from "vant";
import { Cell } from "vant";

Vue.use(List);
Vue.use(Cell);

export default {
    props: {
    msg: Array
  },
  data() {
    return {
      list: this.msg,
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1);
          this.list.push({ title: "这是文章的标题", time: "2020:2:21" });
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    }
  }
};
</script>
<style lang="stylus">
.list {
  width: 100%;
  height: 200px;
}

.list-item {
  height: 50px;
  width: 100%;
  line-height: 50px;

  color: #333;
  border-bottom: 1px solid #ddd;
  display flex
  
}
.list-item:nth-child(even){
    background #f7f7f7
}
.title
    width 50%
    float left
    
.time
    width 30%
    float right 
    text-align right 
    
</style>

