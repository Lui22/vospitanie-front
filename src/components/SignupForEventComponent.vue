<template>
  <div>
    <h2>Записаться на мероприятие</h2>
    <form
      class="new-event-form signup-event-form"
      v-motion="'form'"
      :initial="{
        opacity: 1,
        y: 0,
        transition: {
          stiffness: 2500,
          damping: 600,
          mass: 40,
        },
      }"
      :leave="{
        opacity: 0,
        y: -100,
        transition: {
          stiffness: 2500,
          damping: 600,
          mass: 40,
        },
      }"
    >
      <label class="form__input-group">
        <span class="form__input-span">ФИО</span>
        <input type="text" class="form__input-field" required v-model="name" />
      </label>
      <label class="form__input-group">
        <span class="form__input-span">Группа</span>
        <input type="text" class="form__input-field" required v-model="group" />
      </label>
      <button class="button button_accent new-event__button" @click="signup">
        <img alt="" src="../assets/icons/send-fill.svg" />
      </button>
    </form>
    <span class="signup-event-message"
      >Вы успешно записались на мероприятие</span
    >
  </div>
</template>

<script setup>
import axiosRequest from "@/helpers/axiosRequest";
import { ref } from "vue";
import { useMotions } from "@vueuse/motion";

const props = defineProps(["eventId"]);

const emit = defineEmits(["close"]);

const name = ref("");
const group = ref("");
const signup = async (e) => {
  try {
    await axiosRequest.post(`event/${props.eventId}/signup`, {
      name: name.value,
      group: group.value,
    });
    await e.preventDefault();

    const { form } = useMotions();
    await form.apply("leave");

    setTimeout(() => {
      emit("close", { name, group });
    }, 700);
  } catch (e) {
    console.log(e);
  }
};
</script>

<style scoped></style>
