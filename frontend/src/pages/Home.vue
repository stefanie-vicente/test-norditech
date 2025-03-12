<template>
  <div>
    <h1>Home</h1>
    <button @click="fetchData">Fetch Data</button>
    <p v-if="loading">Loading...</p>
    <p v-if="data">Response: {{ data }}</p>
    <p v-if="error">Error: {{ error.message }}</p>
  </div>
</template>


<script setup>
import { useDataFetch } from '../composables/useDataFetch';

const { data, loading, error, fetchData } = useDataFetch();
</script>
