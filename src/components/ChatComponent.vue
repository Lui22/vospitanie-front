<template>
  <div
    v-motion="'backdrop'"
    :enter="{ opacity: 1 }"
    :initial="{ opacity: 0 }"
    class="chat-backdrop backdrop"
    @click="close"
  />
  <div
    v-motion="'modal'"
    :enter="{
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 2500,
        damping: 600,
        mass: 40,
      },
    }"
    :initial="{
      opacity: 0,
      x: 200,
      transition: {
        stiffness: 2500,
        damping: 600,
        mass: 40,
      },
    }"
    class="chat modal"
  >
    <div class="chat__header">
      <span class="chat__name">Консультационная поддержка</span>
      <div class="button" @click="close">
        <img alt="" src="../assets/icons/close.svg" />
      </div>
    </div>
    <div class="chat__messages">
      <ChatMessageComponent />
    </div>
    <div class="chat-form">
      <input
        v-focus
        class="chat-form__input"
        placeholder="Введите текст..."
        type="text"
        @keydown.esc="$emit('close')"
      />
      <button class="button button_accent">
        <img alt="" src="../assets/icons/send-fill.svg" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import ChatMessageComponent from "@/components/ChatMessageComponent.vue";
import { useMotions } from "@vueuse/motion";
import { onBeforeUnmount, onMounted, reactive } from "vue";

const emit = defineEmits(["close"]);

const messages = reactive();
const loadMessages = async () => {};

onMounted(() => {
  const { backdrop, modal } = useMotions();
  backdrop.apply("enter");
  modal.apply("enter");
});

onBeforeUnmount(async () => {});

const close = async () => {
  const { backdrop, modal } = useMotions();
  modal.apply("initial");
  await backdrop.apply("initial");

  emit("close");
};
</script>
