<template>
  <motion.div
    :whileHover="{ scale: 1.1 }"
    :whilePress="{ scale: 0.95 }"
    class="w-10 h-10 bg-green-500 rounded-sm" />
</template>

<script setup lang="ts">
  import { motion } from 'motion-v';
</script>

<style scoped></style>
