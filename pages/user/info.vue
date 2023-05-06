<template>
  <div>
    <NuxtLayout name="custom">
      <p>{{ userStore.name }}</p>
      <p>{{ userStore.email }}</p>

      <h5>我蒐藏的物件</h5>
      <div class="flex">
        <div
          v-for="(item, index) in object"
          :key="index"
          class="mx-2 bg-slate-200 rounded-md"
        >
          <NuxtLink :to="'/buy/house/' + item.id">
            <div class="p-2">
              {{ item.title }}
              <img src="https://fakeimg.pl/150/" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import axios from "axios";
import { useUserStore } from "@/stores/user";

const route = useRoute();
const userStore = useUserStore();
const { getAuthJSON } = toDo();

let object = reactive([]);

init();

async function init() {
  let r = await getAuthJSON("http://127.0.0.1:8000/api/obj");
  if (r.errCode == 0) {
    Object.assign(object, r.datas);
  }
}
</script>
