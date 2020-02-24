<template>
  <div id="app">
    <Tabbar />

    <van-tabs v-model="active">
      <van-tab title="Html">
        <List v-bind:msg="listMsgHtml" />
      </van-tab>
      <van-tab title="Css">
  <List v-bind:msg="listMsgCss" />
      </van-tab>
      <van-tab title="Js">
       <List v-bind:msg="listMsgJs" />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script type="javascript">
import List from "@/components/List";
// import Grid from "./Grid";
import Tabbar from "@/components/Tabbar.vue";

import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);

export default {
  name: "Code",
  components: {
    List,
    Tabbar
  },
  data() {
    return {
      active: 0,
      listMsgHtml: [
        { title: "1111", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" }
      ],
      listMsgCss: [
        { title: "222", time: "2020:2:22" },
        { title: "222", time: "2020:2:22" },
        { title: "222", time: "2020:2:22" },
        { title: "222", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" }
      ],
      listMsgJs: [
        { title: "1133311", time: "2020:2:22" },
        { title: "3333", time: "2020:2:22" },
        { title: "333", time: "2020:2:22" },
        { title: "333", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" }
      ]
    };
  }
};
</script>

<style lang="stylus"></style>
