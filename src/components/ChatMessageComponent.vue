<template>
  <div :class="messageClass">
    {{ message }}
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["message", "outgoing"]);

const messageClass = computed(() => {
  return {
    "chat-message": true,
    "chat-message_outgoing": props.outgoing,
    "chat-message_ingoing": !props.outgoing,
  };
});
</script>

<style scoped></style>
