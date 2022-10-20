<template>
  <div class="chat-backdrop backdrop" />
  <div class="chat modal">
    <div class="chat__header">
      <span class="chat__name">Консультационная поддержка</span>
      <div class="button">
        <img alt="" src="src/assets/icons/close.svg" />
      </div>
    </div>
    <div class="chat__messages">
      <ChatMessageComponent />
    </div>
    <div class="chat__input">
      <input type="text" placeholder="Введите текст..." />
      <button class="button button_accent">
        <img src="src/assets/icons/send-fill.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
<script setup>
import ChatMessageComponent from "@/components/ChatMessageComponent.vue";
</script>
