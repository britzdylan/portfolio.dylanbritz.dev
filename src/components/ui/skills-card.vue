<template>
  <motion.li
    class="transition-all duration-100 ease-linear pb-6 border-b border-neutral-300 flex flex-col gap-1"
    :initial="{ opacity: 0, y: 20 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :inViewOptions="{ once: true }"
    :transition="{ duration: 0.1, delay: delay * 0.1, ease: 'easeIn' }">
    <h3 class="h2">
      {{ title }}
    </h3>
  </motion.li>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';
  import { defineProps } from 'vue';

  type Props = {
    title: string;
    delay: number;
  };

  defineProps<Props>();
</script>
