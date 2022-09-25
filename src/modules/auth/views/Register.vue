<template>
  <span class="login100-form-title p-b-41"> Registrar </span>
  <form
    class="login100-form validate-form p-b-33 p-t-5"
    @submit.prevent="onSubmit"
  >
    <div class="wrap-input100 validate-input" data-validate="Enter username">
      <input
        v-model="userForm.name"
        class="input100"
        type="text"
        placeholder="User"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe82a;"></span>
    </div>
    <div class="wrap-input100 validate-input" data-validate="Enter mail">
      <input
        v-model="userForm.email"
        class="input100"
        type="email"
        placeholder="Correo"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe818;"></span>
    </div>

    <div class="wrap-input100 validate-input" data-validate="Enter password">
      <input
        v-model="userForm.password"
        class="input100"
        type="password"
        placeholder="Contraseña"
        required
      />
      <span class="focus-input100" data-placeholder="&#xe80f;"></span>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <button class="login100-form-btn" type="submit">Register</button>
    </div>

    <div class="container-login100-form-btn m-t-32">
      <router-link :to="{ name: 'login' }">¿Ya tienes cuenta?</router-link>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const userForm = ref({
      name: "Santi",
      email: "sjimenez@gmail.com",
      password: "123456",
    });
    const { createUser } = useAuth();
    return {
      userForm,
      onSubmit: async () => {
        const { ok, message } = await createUser(userForm.value);
        if (!ok) {
          Swal.fire("error", message, "error");
        } else {
          Swal.fire("Registrado con éxito", message, "success");
          router.push({ name: "no-entry" });
        }
        console.log(ok, message);
      },
    };
  },
};
</script>

<style>
</style>