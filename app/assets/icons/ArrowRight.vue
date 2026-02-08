<template>
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" :fill="colour">
    <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  colour: {
    type: String,
    default: "#e3e3e3",
  },
});
</script>

<style scoped></style>
