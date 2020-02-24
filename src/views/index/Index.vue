<template>
  <div id="app">
    <Banner />
    <Tabbar />
    <List v-bind:msg="listMsg" />
  </div>
</template>

<script type="javascript">
import Banner from "./Banner";
import List from "@/components/List";
// import Grid from "./Grid";
import Tabbar from "@/components/Tabbar.vue";

export default {
  name: "app",
  components: {
    Banner,
    List,
    Tabbar
  },
  data() {
    return {
      listMsg: [
        { title: "1111", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" },
        { title: "1111", time: "2020:2:22" }
      ]
    };
  }
};
</script>

<style lang="stylus"></style>
