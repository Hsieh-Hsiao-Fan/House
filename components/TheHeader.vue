<template>
  <div class="bg-orange-500">
    <header class="container mx-auto">
      <nav class="flex w-full justify-between py-2">
        <div><NuxtLink to="/">home</NuxtLink></div>
        <ul class="flex">
          <li class="px-2"><NuxtLink to="/buy/">買屋</NuxtLink></li>
          <li class="px-2"><NuxtLink to="/sale">賣屋</NuxtLink></li>
          <li v-if="!userStore.isLogin" class="px-2">
            <NuxtLink to="/loginPage">登入</NuxtLink>
          </li>
          <li class="px-2">
            <NuxtLink to="/user/info">{{ userStore.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
const route = useRoute();
const userStore = useUserStore();

</script>

<style>
.router-link-active,
.router-link-exact-active {
  color: #ffffff;
}
</style>