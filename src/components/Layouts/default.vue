<template>
  <div class="min-h-screen max-w-screen">
    <Navbar />
    <div class="max-w-xl p-4 mt-2 mx-auto bg-gray-300 rounded-md">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>

<style lang="scss" scoped></style>
