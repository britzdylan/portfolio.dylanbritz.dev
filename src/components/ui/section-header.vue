<template>
  <motion.div
    :initial="{ width: 0 }"
    :whileInView="{ width: '100%', height: 'auto' }"
    :inViewOptions="{ once: true }"
    :transition="{ duration: 1, delay: 0.2, ease: 'easeOut' }"
    class="w-full border-t-2 border-neutral-800 sticky top-4 pt-1 overflow-hidden">
    <h2 class="truncate h3">
      {{ title }}
    </h2>
  </motion.div>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';
  import { defineProps } from 'vue';

  type Props = {
    title: string;
  };

  defineProps<Props>();
</script>

<style scoped></style>
