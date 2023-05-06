<template>
  <div>
    <NuxtLayout name="custom">
      <BuyKeyView />
      <ul class="flex">
        <li class="p-2"><NuxtLink to="/buy/traffic">交通</NuxtLink></li>
        <!-- <li class="p-2"><NuxtLink to="/but/socilal">社區</NuxtLink></li> -->
      </ul>

      <div class="flex">
        <div
          v-for="(item, index) in objectList"
          :key="index"
          class="mx-2 bg-slate-200 rounded-md"
        >
          <NuxtLink :to="'/buy/house/' + item.id">
            <div class="p-2">
              <p>{{ item.title }}</p>
              <p>{{ item.obj_no }}</p>
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
const userStore = useUserStore();
const { getJSON } = toDo();
let objectList = reactive([]);

init();

async function init() {
  let r = await getJSON("http://127.0.0.1:8000/api/objects");
  Object.assign(objectList, r);
}
</script>