import { ref } from "vue";
import axios from "../axiosInstance";

export function useSendMessage() {
  const messages = ref([]);
  const userMessage = ref("");
  const sendingMessage = ref(false);

  const sendChatMessage = async (message) => {
    try {
      const response = await axios.post("/chat", { message });
      return response.data;
    } catch (error) {
      throw new Error("Failed to get response");
    }
  };

  const sendMessage = async () => {
    if (!userMessage.value) return;

    messages.value.push({
      id: Date.now(),
      text: userMessage.value,
      sender: "user",
    });

    const message = userMessage.value;
    sendingMessage.value = true;
    userMessage.value = "";

    try {
      const response = await sendChatMessage(message);
      messages.value.push({
        id: Date.now(),
        text: response.reply,
        sender: "ai",
      });
    } catch (error) {
      messages.value.push({
        id: Date.now(),
        text: "Error: Failed to get response",
        sender: "ai",
      });
    }

    sendingMessage.value = false;
  };

  return {
    messages,
    userMessage,
    sendingMessage,
    sendMessage,
  };
}
