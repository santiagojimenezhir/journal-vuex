<template>
  <div
    class="mb-3 p-2 entry-container pointer"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <!--Titulo de entrada : Componente -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">{{ day }}</span
      ><span class="mx-1 fs-5">{{ month }}</span
      ><span class="mx-2 fw-light">{{ yearDate }}</span>
    </div>
    <div class="entry-description">
      <p class="">
        {{ shortText }}
      </p>
    </div>
  </div>
</template>
<script>
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
export default {
  props: {
    entry: {
      type: Object,
      require: true,
    },
  },
  computed: {
    shortText() {
      return this.entry.text.length > 100
        ? this.entry.text.substring(0, 100) + "..."
        : this.entry.text;
    },
    day() {
      const date = new Date(this.entry.date);
      return date.getDate();
    },
    month() {
      const date = new Date(this.entry.date);
      return months[date.getMonth()];
    },
    yearDate() {
      const anio = new Date(this.entry.date);
      return `${anio.getFullYear()} | ${days[anio.getDay()]}`;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/styles.scss";

.entry-container {
  border-bottom: 1px solid $primary;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lightgrey;
    transition: 0.2s all ease-in;
  }
  .entry-description {
    p {
      font-size: 12px !important;
      font-weight: regular;
    }
  }
}
</style>
