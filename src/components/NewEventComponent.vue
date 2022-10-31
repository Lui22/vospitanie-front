<template>
  <form action="" class="new-event-form">
    <label class="form__input-group">
      <span class="form__input-span">Название</span>
      <input type="text" class="form__input-field" required />
    </label>
    <label class="form__input-group">
      <span class="form__input-span">Дата</span>
      <input type="date" class="form__input-field" required />
    </label>
    <label class="form__input-group">
      <span class="form__input-span">Количество студентов</span>
      <input type="number" class="form__input-field" required />
    </label>
    <label class="form__input-group">
      <span class="form__input-span">Адрес</span>
      <input type="text" class="form__input-field" required />
    </label>
    <label class="form__input-group">
      <span class="form__input-span">Краткое описание</span>
      <textarea class="form__input-field" required />
    </label>
    <button class="button button_accent new-event__button" @click="sendEvent">
      <img alt="" src="../assets/icons/send-fill.svg" />
    </button>
  </form>
</template>

<script setup>
const sendEvent = async (e) => {};
</script>

<style scoped></style>
