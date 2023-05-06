<template>
  <div>
    <TheHeader />
    <div class="container mx-auto">
      <slot />
    </div>
    <!-- <TheFooter /> -->
  </div>
</template>
<script>
export default {
  layout: "custom",
};
</script>