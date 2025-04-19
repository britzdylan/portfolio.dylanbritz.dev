<template>
  <motion.li
    class="pb-6 border-b border-neutral-300 flex flex-col gap-1"
    :initial="{ opacity: 0, y: 20 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :inViewOptions="{ once: true }"
    :transition="{ duration: 0.1, delay: delay * 0.1, ease: 'easeIn' }">
    <h3 class="h2">
      {{ title }}
    </h3>

    <div class="flex flex-col gap-2 text-neutral-600">
      <p class="text-sm">
        {{ company }}
      </p>
      <p>
        {{ date }}
      </p>
    </div>
  </motion.li>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';
  import { defineProps } from 'vue';

  type Props = {
    title: string;
    company: string;
    date: string;
    delay: number;
  };

  defineProps<Props>();
</script>
