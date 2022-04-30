<template>
  <div
    class="mb-3 p-2 entry-container pointer"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <!--Titulo de entrada : Componente -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span><span class="mx-1 fs-5">Julio</span
      ><span class="mx-2 fw-light">2021</span>
    </div>
    <div class="entry-description">
      <p class="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dicta nam
        voluptatum fugiat voluptatibus voluptas quidem commodi! Molestiae, mollitia.
        Veritatis impedit magni modi adipisci dolorum autem quibusdam dolorem expedita
        quis.
      </p>
    </div>
  </div>
</template>
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
