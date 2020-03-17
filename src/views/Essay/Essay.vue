<template>
  <div id="app">
    <Tabbar />
    <List v-bind:msg="listMsg" />
  </div>
</template>

<script type="javascript">
import List from "@/components/List";
// import Grid from "./Grid";
import Tabbar from "@/components/Tabbar.vue";

export default {
  name: "Essay",
  components: {
    List,
    Tabbar
  },
  data() {
    return {
      listMsg: [
      { id:'1',title: "1111", time: "2020:2:22" },
        { id:'2',title: "1111", time: "2020:2:22" },
        { id:'3',title: "1111", time: "2020:2:22" },
        { id:'4',title: "1111", time: "2020:2:22" },
        { id:'5',title: "1111", time: "2020:2:22" },
        { id:'6',title: "1111", time: "2020:2:22" },
        { id:'7',title: "1111", time: "2020:2:22" },
        { id:'8',title: "1111", time: "2020:2:22" },
        { id:'9',title: "1111", time: "2020:2:22" },
        { id:'10',title: "1111", time: "2020:2:22" },
        { id:'11',title: "1111", time: "2020:2:22" },
        { id:'12',title: "1111", time: "2020:2:22" }
      ],
      
    };
  }
};
</script>

<style lang="stylus"></style>
