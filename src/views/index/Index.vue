<template>
  <div id="app">
    <Banner />
    <Tabbar />
    <List :msg="listMsg"> </List>
   
  </div>
</template>

<script type="javascript">
import Banner from "./Banner";
import List from "@/components/List";
import Tabbar from "@/components/Tabbar.vue";

export default {
  components: {
    Banner,
    List,
    Tabbar
  },
  data() {
    return {
      listMsg: [
        { id:'1',title: "114211", time: "2020:2:22" },
        { id:'2',title: "113211", time: "2020:2:22" },
        { id:'3',title: "1113451", time: "2020:2:22" },
        { id:'4',title: "11511", time: "2020:2:22" },
        { id:'5',title: "11ew11", time: "2020:2:22" },
        { id:'6',title: "111ert1", time: "2020:2:22" },
        { id:'7',title: "111fsd1", time: "2020:2:22" },
        { id:'8',title: "11fdg11", time: "2020:2:22" },
        { id:'9',title: "111hgdf1", time: "2020:2:22" },
        { id:'10',title: "11es11", time: "2020:2:22" },
        { id:'11',title: "11rew11", time: "2020:2:22" },
        { id:'12',title: "11fsdf11", time: "2020:2:22" }
      
      ]
    }
  },

};
</script>


