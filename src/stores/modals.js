import { defineStore } from "pinia";
import { ref } from "vue";

export const useChatStore = defineStore("chat", () => {
  const isChatOpened = ref(false);

  const openChat = () => {
    isChatOpened.value = true;
  };

  const closeChat = () => {
    isChatOpened.value = false;
  };

  return { isChatOpened, openChat, closeChat };
});
