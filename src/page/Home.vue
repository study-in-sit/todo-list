<template>
  <div>
    <div class="flex w-full items-center space-x-2">
      <input
        class="w-full text-xl p-2 outline-none rounded-md"
        type="text"
        v-model="value"
      />
      <div
        class="w-10 h-10 hover:bg-blue-300 bg-white rounded-full flex justify-center items-center cursor-pointer"
        @click="addTodo"
      >
        💙
      </div>
    </div>
    <div class="flex flex-col space-y-2 mt-4 w-full">
      <TodoItem
        v-for="item in totoList"
        :key="item.id"
        :do="item.do"
        :done="item.done"
        :data="item"
        :id="item.id"
        v-on:delete="DeleteTodo"
        v-on:check="CheckTodo"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from '@vue/reactivity';
import { computed, onMounted } from '@vue/runtime-core';
import TodoItem from '../components/Todo/Item.vue';
const baseUrl = 'http://localhost:8000/todo';
const value = ref('');
const totoList = ref([]);

const getTodo = async () => {
  const res = await fetch(baseUrl, {
    method: 'GET',
  });
  if (res.status === 200) return res.json();
  return [];
};

const postTodo = async () => {
  const res = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      do: value.value,
      done: false,
    }),
  });
  if (res.status === 201) return true;
  return false;
};

const DeleteTodo = async (id) => {
  const res = await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
  if (res.status === 200) {
    fetchdata();
  }
};

const CheckTodo = async (data) => {
  const res = await fetch(`${baseUrl}/${data.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      done: true,
    }),
  });
  if (res.status === 200) {
    fetchdata();
  }
};

const addTodo = async () => {
  if (!value.value) {
    return;
  }
  const success = await postTodo();
  if (success) {
    fetchdata();
  }
};

const deleteTodo = async () => {
  if (!value.value) {
    return;
  }
  const success = await postToddo();
  if (success) {
    fetchdata();
  }
};

const fetchdata = async () => {
  totoList.value = [];
  const todoGet = await getTodo();
  todoGet.forEach((element) => {
    totoList.value.push(element);
  });
};

onMounted(() => {
  fetchdata();
});
</script>

<style lang="scss" scoped></style>
