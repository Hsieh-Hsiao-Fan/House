<template>
  <div>
    <NuxtLayout name="custom">
      <button @click="login">login</button>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import axios from "axios";

const userStore = useUserStore();
 const { getCookieByName } = toDo()
// let user = reactive({
//   email: "lambert@gmail.com",
//   password: "11111111",
// });

async function register() {
  await axios.post(
    "http://127.0.0.1:8000/api/register",
    { name: "lambert", email: "lambert@gmail.com", password: "11111111" },
    {
      headers: {
        // Accept: "application/json",
        "X-XSRF-TOKEN": getCookieByName("XSRF-TOKEN"),
      },
    }
  );
}

async function login() {
  axios.defaults.withCredentials = true;

  await axios
    .post(
      "http://127.0.0.1:8000/api/login",
      { email: userStore.email, password: userStore.password },
      {
        headers: {
          // Accept: "application/json",
          "X-XSRF-TOKEN": getCookieByName("XSRF-TOKEN"),
        },
      }
    )
    .then(function (response) {
      userStore.$patch({
        token: response.data.token,
        isLogin: true,
        name: response.data.user.name,
      });
    });
}

</script>
