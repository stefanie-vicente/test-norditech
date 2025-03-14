<template>
  <div
    class="bg-gray-950 text-white flex flex-col items-center p-8 rounded-2xl shadow-xl max-w-5xl mx-auto"
  >
    <div class="w-full space-y-6">
      <ChatMessage
        v-for="msg in messages"
        :key="msg.id"
        :message="msg"
        :senderClass="msg.sender === 'user' ? 'text-right' : 'text-left'"
      />
      <div
        class="bg-gray-900 mt-8 w-full p-5 rounded-xl flex items-center gap-4"
      >
        <input
          type="text"
          v-model="userMessage"
          @keydown.enter="sendMessage"
          :disabled="sendingMessage"
          placeholder="Ask something..."
          class="flex-1 bg-transparent text-white text-lg outline-none placeholder-gray-400"
        />
        <button
          @click="sendMessage"
          :disabled="sendingMessage"
          class="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import ChatMessage from "./ChatMessage.vue";
import { useSendMessage } from "../composables/useSendMessage";

const { messages, userMessage, sendingMessage, sendMessage } = useSendMessage();
</script>
