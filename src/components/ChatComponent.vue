<template>
  <div class="chat-backdrop backdrop" @click="$emit('close')" />
  <div class="chat modal">
    <div class="chat__header">
      <span class="chat__name">Консультационная поддержка</span>
      <div class="button" @click="$emit('close')">
        <img alt="" src="src/assets/icons/close.svg" />
      </div>
    </div>
    <div class="chat__messages">
      <ChatMessageComponent />
    </div>
    <div class="chat-form">
      <input
        class="chat-form__input"
        type="text"
        placeholder="Введите текст..."
        @keydown.esc="$emit('close')"
        v-focus
      />
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
