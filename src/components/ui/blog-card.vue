<template>
  <motion.li
    class="transition-all duration-100 ease-linear pb-6 border-b border-neutral-300 flex flex-col gap-2 cursor-pointer group hover:border-neutral-500"
    :initial="{ opacity: 0, y: 20 }"
    :whileInView="{ opacity: 1, y: 0 }"
    :inViewOptions="{ once: true }"
    :transition="{ duration: 0.1, delay: delay * 0.1, ease: 'easeIn' }">
    <a
      class="group-hover:translate-x-2 transform transition-all duration-100 ease-linear"
      :href="url"
      >{{ title }}</a
    >
    <div
      class="group-hover:translate-x-2 transform transition-all duration-100 ease-linear flex gap-2">
      <time class="text-sm text-neutral-500">
        {{ date.toLocaleDateString() }}
      </time>
      <span class="text-sm text-neutral-500"> • </span>
      <span class="text-sm text-neutral-500">{{ author }}</span>
    </div>
  </motion.li>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';
  import { defineProps } from 'vue';

  type Props = {
    title: string;
    date: Date;
    author: string;
    delay: number;
    url: string;
  };

  defineProps<Props>();
</script>

<style scoped></style>
