<template>
  <div :class="['chat-message', senderClass]" class="p-3">
    <div :class="messageClass">
      <template v-if="isCode">
        <pre class="bg-gray-800 text-white p-4 rounded-lg overflow-auto"><code>{{ message.text }}</code></pre>
      </template>
      <template v-else>
        {{ message.text }}
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
  senderClass: String,
  messageClass: String,
});

const isCode = computed(() => {
  return props.message.text.includes('```') || props.message.text.includes('`');
});
</script>

<style scoped>
pre {
  background-color: #333;
  padding: 10px;
  border-radius: 8px;
  overflow-x: auto;
  white-space: pre-wrap;
}
code {
  font-size: 0.9rem;
}
</style>
