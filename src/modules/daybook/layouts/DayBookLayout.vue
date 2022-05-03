<template>
  <NavBar />
  <div class="row justify content-center" v-if="isLoading">
    <div class="col 3 alert-info text-center mt-5">
      Espere
      <h3 class="mt-2"><i class="fa fa-spin fa-sync"></i></h3>
    </div>
  </div>
  <div class="d-flex row" v-else>
    <div class="col-4">
      <EntryList />
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    NavBar: defineAsyncComponent(() => import("../components/NavBar.vue")),
    EntryList: defineAsyncComponent(() => import("../components/EntryList.vue")),
  },
  methods: {
    /**
     * Journal Maps Mutations
     * Deben ser methods
     */

    /**
     * Journal Maps Actiosn
     */

    ...mapActions("journal", ["loadEntries"]),
  },
  computed: {
    /**
     * Journal Maps State
     * Debe ser computed
     */
    ...mapState("journal", ["isLoading"]),
  },
  created() {
    this.loadEntries();
    console.log(this.isLoading);
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/styles.scss";
</style>
>
