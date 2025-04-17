<template>
  <a
    :href="link"
    target="_blank"
    rel="noopener"
    class="w-full bg-white/5 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10">
    <div
      class="w-15 h-15 bg-black rounded-lg p-3 flex items-center justify-center">
      <small>{{ title }}</small>
    </div>
    <div class="flex-1">
      <h2 class="font-bold text-lg">{{ title }}</h2>
      <p class="text-sm">{{ description }}</p>
    </div>
    <div class="">
      <svg class="w-4 h-4" viewBox="0 0 18 18" fill="currentColor">
        <path
          d="M16.031 7.313c0 .465-.378.843-.844.843-.465 0-.843-.378-.843-.843V4.852L10.159 9.036a1.089 1.089 0 01-1.195 0 1.089 1.089 0 010-1.195l4.184-4.185h-2.461c-.465 0-.843-.378-.843-.843 0-.466.378-.844.843-.844h4.5c.466 0 .844.378.844.844v4.5zM12.938 9c-.466 0-.844.378-.844.844v4.5H3.656V5.906h4.5c.466 0 .844-.378.844-.843 0-.466-.378-.844-.844-.844h-4.78c-.778 0-1.407.63-1.407 1.406v9c0 .777.63 1.406 1.406 1.406h9c.777 0 1.406-.629 1.406-1.406v-4.78c0-.466-.378-.844-.843-.844z"></path>
      </svg>
    </div>
  </a>
</template>

<script setup lang="ts">
  interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
  }

  defineProps<ProjectCardProps>();
</script>
<style lang="scss" scoped></style>
