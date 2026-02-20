<template>
  <div class="w-full bg-[#1c1c1c10]" :style="{ height: height + 'px' }" />
</template>

<script setup lang="ts">
interface Props {
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  height: 1,
});
</script>

<style scoped></style>
