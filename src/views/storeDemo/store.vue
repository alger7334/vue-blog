<template>
  <div class="store">
    <p>{{count}}</p>
    <p>{{count2}}</p>
    <p>{{count3}}</p>
    <p>{{this.$store.state.count}}</p>
    <p>{{this.$store.getters.doneTodos[0].text}}</p>
    <p>{{this.$store.getters.getTodoById(2)}}</p>
    <p>{{getTodoById(2)}}</p>

    <button @click="changeCount2(2)">count2 加2</button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "store1",
  computed: {
    ...mapState(["count", "count2","count3"]),
    ...mapGetters(["doneTodos", "getTodoById"])
  },
  methods: {
    ...mapMutations(["changeCount2"])
  }
};
</script>