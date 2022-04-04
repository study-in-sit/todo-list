<template>
  <div
    class="w-full relative rounded-md py-4 px-4 bg-blue-500 text-md text-white flex justify-between transition-all"
    :class="darkmode ? 'bg-blue-500' : 'bg-blue-300'"
  >
    {{ props.do }}
    <div class="flex space-x-2">
      <div
        class="w-20 py-1 flex justify-center items-center rounded-md"
        :class="[
          props.done
            ? darkmode
              ? 'bg-green-400'
              : 'bg-green-700'
            : darkmode
            ? 'bg-red-400'
            : 'bg-red-700',
        ]"
      >
        {{ props.done ? 'DONE' : 'UNDONE' }}
      </div>
      <div
        class="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer"
        @click="$emit('delete', props.id)"
      >
        ❌
      </div>
      <div
        class="w-10 h-10 bg-white rounded-full flex justify-center items-center cursor-pointer"
        @click="$emit('check', props.data)"
      >
        ✅
      </div>
    </div>
  </div>
</template>

<script setup>
import ThemeStore from '../../state/theme';
import { computed } from '@vue/runtime-core';

const darkmode = computed(() => ThemeStore.darkmode);

const props = defineProps({
  data: { required: true },
  id: { required: true, type: Number },
  do: { required: true, type: String },
  done: { required: true, type: Boolean },
});

const emit = defineEmits(['delete']);
</script>

<style lang="scss" scoped></style>
