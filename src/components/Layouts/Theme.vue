<template>
  <div
    class="w-14 h-14 rounded-full bg-white flex justify-center items-center text-3xl cursor-pointer hover:bg-gray-400"
    @click="ThemeStore.toggle()"
  >
    {{ darkmode ? '🌙' : '🌑' }}
  </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core';
import ThemeStore from '../../state/theme';
const darkmode = computed(() => ThemeStore.darkmode);
</script>

<style lang="scss" scoped></style>
