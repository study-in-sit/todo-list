<template>
  <div
    class="w-screen h-20 flex items-center text-xl px-10 font-bold justify-between transition-all ease-in-out"
    :class="darkmode ? 'bg-blue-800' : 'bg-blue-300'"
  >
    <h1>Todo List</h1>
    <Theme />
  </div>
</template>

<script setup>
import Theme from './Theme.vue';
import ThemeStore from '../../state/theme';
import { computed } from '@vue/runtime-core';

const darkmode = computed(() => ThemeStore.darkmode);
</script>

<style lang="scss" scoped></style>
