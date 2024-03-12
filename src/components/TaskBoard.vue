<script setup>
import { ref } from 'vue'

const lists = ref([])

fetch('https://my-json-server.typicode.com/girishpandenc/donatellodbjson/lists/', {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
})
  .then((res) => res.json())
  .then((data) => (lists.value = data))
console.log(lists)

const getLists = () => {
  fetch('https://my-json-server.typicode.com/girishpandenc/donatellodbjson/lists/', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then((res) => res.json())
    .then((data) => (lists.value = data))
}
</script>

<template>
  <div>
    <div v-for="list in lists">
      <div>
        {{ list.name }}
      </div>
    </div>
  </div>
</template>
