<template>
  <div>
    <NuxtLayout name="custom">
      <div>
        <h1>{{ object.title }}</h1>
        <div>
          <p><span>編號：</span>{{ object.obj_no }}</p>
          <p><span>價格：</span>{{ object.price }}</p>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  layout: "custom",
};
</script>

<script setup>
const route = useRoute();
const { id } = route.params;
const { getJSON } = toDo();
let object = reactive([]);

getObjById();

async function getObjById() {
  let r = await getJSON(`http://127.0.0.1:8000/api/objects/${id}`);
  Object.assign(object, r);
}
</script>