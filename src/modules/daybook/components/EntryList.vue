<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        name="term"
        id="term"
        type="text"
        placeholder="Búsqueda entrada"
        class="form-control mb-2"
        v-model="term"
      />
    </div>
    <div class="entry-scrollarea">
      <Entry
        v-for="entry in entriesByTerm"
        :key="entry.id"
        v-model="term"
        :entry="entry"
      ></Entry>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Entry: defineAsyncComponent(() => import("../components/Entry.vue")),
  },
  computed: {
    /**Destructuración de mapGetter para cada módulo (nombrmodulo,nombredemétodo en getters) */
    ...mapGetters("journal", ["getEntriesByTerm"]),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    },
  },
  data() {
    return {
      term: "",
    };
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
