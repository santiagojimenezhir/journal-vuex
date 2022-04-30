<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        type="text"
        name=""
        id=""
        placeholder="Búsqueda entrada"
        class="form-control mb-2"
      />
    </div>
    <div class="entry-scrollarea">
      <h2 v-for="item in 100" :key="item">
        <Entry></Entry>
      </h2>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Entry: defineAsyncComponent(() => import("../components/Entry.vue")),
  },
  methods: {
    OpenEntry() {
      alert("");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/styles.scss";

.entry-list-container {
  border-right: 1px solid $primary;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 110px);
  overflow: scroll;
}
</style>
