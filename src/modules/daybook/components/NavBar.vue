<template>
  <nav class="navbar bg-primary">
    <a href="" class="navbar-brand text-white"
      ><img
        src="@/assets/logo.png"
        alt=""
        class="d-inline-block align-text-top mx-2"
        height="24"
      />
      {{ userName }}
    </a>
    <div class="d-flex">
      <button class="btn btn-danger mx-2" @click="onLogout">
        <i class="fa fa-sign-out-alt"></i>
      </button>
    </div>
  </nav>
</template>
<script>
import { useRouter } from "vue-router";
import useAuth from "../../auth/hooks/useAuth";
export default {
  setup() {
    const { userName, logout } = useAuth();
    const router = useRouter();

    return {
      userName,
      onLogout: () => {
        router.push({ name: "login" });
        logout();
      },
    };
  },
};
</script>
