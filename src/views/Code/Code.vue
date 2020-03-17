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
        { id: "1", title: "1111", time: "2020:2:22" },
        { id: "2", title: "1111", time: "2020:2:22" },
        { id: "3", title: "1111", time: "2020:2:22" },
        { id: "4", title: "1111", time: "2020:2:22" },
        { id: "5", title: "1111", time: "2020:2:22" },
        { id: "6", title: "1111", time: "2020:2:22" }
      ],
      listMsgCss: [
        { id: "7", title: "222", time: "2020:2:22" },
        { id: "8", title: "222", time: "2020:2:22" },
        { id: "9", title: "222", time: "2020:2:22" },
        { id: "13", title: "222", time: "2020:2:22" },
        { id: "13", title: "1111", time: "2020:2:22" },
        { id: "13", title: "1111", time: "2020:2:22" }
      ],
      listMsgJs: [
        { id: "21", title: "1133311", time: "2020:2:22" },
        { id: "14", title: "3333", time: "2020:2:22" },
        { id: "15", title: "333", time: "2020:2:22" },
        { id: "16", title: "333", time: "2020:2:22" },
        { id: "17", title: "1111", time: "2020:2:22" },
        { id: "18", title: "1111", time: "2020:2:22" }
      ]
    };
  }
};
</script>

<style lang="stylus"></style>
