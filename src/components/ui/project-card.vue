<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener"
    :style="{ top: `calc(var(--spacing) * ${offset})` }"
    class="w-full flex items-start gap-2 py-2 group">
    <div class="flex flex-col items-start">
      <h3 class="flex gap-1 items-center h2">
        {{ title
        }}<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 mt-1 hidden group-hover:block text-primary-500">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      </h3>
      <p class="text-neutral-600">{{ description }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
  interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    offset: number;
  }

  defineProps<ProjectCardProps>();
</script>
<style lang="scss" scoped></style>
