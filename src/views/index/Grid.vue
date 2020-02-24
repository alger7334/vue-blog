<template>
  <div class="grid">
    <van-grid>
      <van-grid-item icon="fire-o" text="随笔" />
      <van-grid-item icon="orders-o" text="Html" />
      <van-grid-item icon="flag-o" text="Css" />
      <van-grid-item icon="bar-chart-o" text="Js" />
    
    </van-grid>
  </div>
</template>
<script>
import Vue from "vue";

import { Grid, GridItem } from "vant";
import { Icon } from 'vant';

Vue.use(Icon);


Vue.use(Grid);
Vue.use(GridItem);
export default {};
</script>