<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-5 fw-bold">15</span><span class="mx-1 fs-5">Julio</span
      ><span class="mx-2 fw-light">2021</span>
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
  <div class="d-flex flex-column px-3 h75">
    <textarea cols="10" rows="5" placeholder="¿Que sucedió hoy?"></textarea>
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
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
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
