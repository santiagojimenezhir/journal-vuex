<template>
  <div class="entry-title d-flex justify-content-between p-2" v-if="entry">
    <div>
      <span class="text-success fs-5 fw-bold">{{ day }}</span
      ><span class="mx-1 fs-5">{{ month }}</span
      ><span class="mx-2 fw-light">{{ yearDate }}</span>
    </div>
    <div>
      <button class="btn btn-danger m-1">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary m-1">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />
  <div class="d-flex flex-column px-3 h75" v-if="entry">
    <textarea
      cols="10"
      rows="5"
      placeholder="¿Que sucedió hoy?"
      v-model="entry.text"
    ></textarea>
  </div>
  <Fab icon="fa-save"></Fab>
  <img
    src="https://i0.wp.com/blancoynegro.com.mx/wp-content/uploads/2018/10/BYN_8217.jpg?fit=3000%2C2000&ssl=1"
    alt="entry-img"
    srcset=""
    class="img-thumbnail"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import getDayMonthYear from "../helpers/getDayMonthYear";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
  props: {
    id: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      entry: null,
    };
  },
  watch: {
    id(value, oldValue) {
      console.log(value, oldValue);
      this.loadEntry();
    },
  },
  created() {
    this.loadEntry();
  },
  methods: {
    loadEntry() {
      const entry = this.getEntryById(this.id);
      if (!entry) return this.$router.push({ name: "no-entry" });
      this.entry = entry;
    },
  },
  computed: {
    ...mapGetters("journal", ["getEntryById"]),
    day() {
      const { day } = getDayMonthYear(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDayMonthYear(this.entry.date);
      return month;
    },
    yearDate() {
      const { yearDay } = getDayMonthYear(this.entry.date);
      return yearDay;
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  &:focus {
    outline: none;
  }
}
img {
  width: 150px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
