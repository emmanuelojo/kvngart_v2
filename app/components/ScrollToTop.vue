<template>
  <transition name="fade">
    <div
      v-show="isVisible"
      class="fixed right-4 bottom-16 z-50 w-10 h-10 flex items-center justify-center bg-[#daa520]/40 hover:bg-[#daa520]/70 cursor-pointer rounded shadow-md"
      @click="toTop"
    >
      <ChevronUp color="#1c1c1c" :size="20" />
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { ChevronUp } from "lucide-vue-next";

interface Props {
  threshold?: number;
}

const props = withDefaults(defineProps<Props>(), {
  threshold: 300,
});

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > props.threshold; // show after <threshold>px scroll
};

const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
