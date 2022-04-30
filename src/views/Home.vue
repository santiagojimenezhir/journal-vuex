<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <button
      @click="goToDayBook"
      type="button"
      name=""
      id=""
      class="btn btn-primary btn-lg btn-block m-1"
    >
      Hola
    </button>
    <button type="button" name="" id="" class="btn btn-secondary btn-lg btn-block m-1">
      Hola
    </button>
    <button type="button" name="" id="" class="btn btn-success btn-lg btn-block m-1">
      Hola
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDayBook() {
      this.$router.push({ name: "no-entry" });
      /**
       * Se cambio de daybook a no entry ya que estes es una ruta hija,
       * nos mandaria a la ruta : daybook pero con el contenido de no-entry
       */
    },
  },
};
</script>
