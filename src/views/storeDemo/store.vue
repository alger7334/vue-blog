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
    <p>
      {{incrementData}}
      <button @click="increment('increment改变之后的新文字')">increment改变</button>
    </p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "store1",
  computed: {
    ...mapState(["count", "count2", "count3", "incrementData"]),
    ...mapGetters(["doneTodos", "getTodoById"])
  },
  methods: {
    ...mapMutations(["changeCount2"]),
    ...mapActions([
      "increment"
      // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ])
  }
};
</script>