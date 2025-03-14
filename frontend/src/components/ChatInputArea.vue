<template>
    <div class="bg-gray-900 mt-8 w-full p-5 rounded-xl flex items-center gap-4">
      <input
        type="text"
        v-model="userMessage"
        @keydown.enter="sendMessage"
        placeholder="Ask something..."
        class="flex-1 bg-transparent text-white text-lg outline-none placeholder-gray-400"
      />
      <button 
        :disabled="!userMessage" 
        @click="sendMessage" 
        class="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
      >
        Send
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const emit = defineEmits(['sendMessage']);
  
  const userMessage = ref('');
  
  const sendMessage = () => {
    if (userMessage.value) {
      emit('sendMessage', userMessage.value);
      userMessage.value = ''; 
    }
  };
  </script>
  