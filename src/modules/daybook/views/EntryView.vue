<template>
  <div class="entry-title d-flex justify-content-between p-2" v-if="entry">
    <div>
      <span class="text-success fs-5 fw-bold">{{ day }}</span
      ><span class="mx-1 fs-5">{{ month }}</span
      ><span class="mx-2 fw-light">{{ yearDate }}</span>
    </div>
    <div>
      <input
        type="file"
        @change="onSelectedImage"
        ref="imageSelector"
        v-show="false"
        accept="image/png, image/jpeg"
      />
      <button class="btn btn-danger m-1" @click="deleteEntry" v-if="entry.id">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary m-1" @click="onSelectImage">
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
  <Fab icon="fa-save" @SaveEntry="saveEntry" />
  <img v-if="entry.picture && !localImage" :src="entry.picture" class="img-thumbnail" />
  <img v-if="localImage" :src="localImage" alt="entry-img" class="img-thumbnail" />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import getDayMonthYear from "../helpers/getDayMonthYear";
import Swal from "sweetalert2";
import uploadImage from "../helpers/uploadImage";
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
      localImage: null,
      file: null,
    };
  },
  watch: {
    id(/*value, oldValue*/) {
      this.loadEntry();
    },
  },
  created() {
    this.loadEntry();
  },
  methods: {
    ...mapActions("journal", ["updateEntries", "createEntries", "deleteEntries"]),
    loadEntry() {
      this.file = null;
      this.localImage = null;
      let entry;

      if (this.id === "new") {
        entry = {
          text: "",
          date: new Date().getTime(),
        };
      } else {
        entry = this.getEntryById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }

      this.entry = entry;
    },
    async saveEntry() {
      new Swal({
        title: "Espere por favor",
        allowOutsideClick: false,
      });
      Swal.showLoading();
      const picture = await uploadImage(this.file);
      this.entry.picture = picture;
      if (this.entry.id) {
        await this.updateEntries(this.entry);
      } else {
        /**
         * se hace redirección de la entrada para
         * posteriomente mandarlo a la vista entryu donde si preisoan
         * nuevamente se actualizara la entrada
         */
        const id = await this.createEntries(this.entry); //Es awai porque regresa el id
        this.$router.push({ name: "entry", params: { id } });
      }
      this.file = null;
      Swal.fire("Guardado", "Entrada resgistrada con éxito", "success");
    },
    async deleteEntry() {
      const { isConfirmed } = await Swal.fire({
        title: "¿Estas seguro ?",
        text: "Una vez borrado no se podrá recuperar",
        showDenyButton: true,
        confirmButtonText: "Sí, borrar",
      });

      if (isConfirmed) {
        new Swal({
          title: "Espere por favor",
        });

        Swal.showLoading();
        await this.deleteEntries(this.entry.id);
        this.$router.push({ name: "no-entry" });
        Swal.fire("Eliminada", "Se elimino tu entrada", "success");
      }
    },
    async onSelectedImage(event) {
      //Se captura el evento siempre por defecto en vue
      const file = event.target.files[0];
      if (!file) {
        this.localImage = null;
        this.file = null;
        return;
      }
      this.file = file;
      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(file);
    },
    onSelectImage() {
      this.$refs.imageSelector.click();
      //imageSelector
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
