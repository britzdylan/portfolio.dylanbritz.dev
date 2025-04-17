<template>
  <a
    v-if="post.data"
    :href="`/writing/${post.id}`"
    :title="post.data.title"
    :aria-label="post.data.title"
    class="rounded-full text-neutral-800 flex items-center cursor-pointer gap-2 font-medium">
    <svg
      v-if="!rotate"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
      class="size-5">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
    </svg>
    <div class="flex flex-col gap-1 w-max" :class="rotate ? 'ml-auto' : ''">
      {{ rotate ? 'Next' : 'Previous' }} Post
      <!-- <small class="text-xs">{{ post.data.title }}</small> -->
    </div>
    <svg
      v-if="rotate"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
      class="size-5 rotate-180">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
    </svg>
  </a>
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';

  type Props = {
    post: { data?: { title: string }; id: string };
    rotate: boolean;
  };

  defineProps<Props>();

  const go = () => {
    if (window) {
      window.history.back();
    }
  };
</script>

<style scoped></style>
b
