<template>
  <div class="event hoverable">
    <div class="event__header">
      <div :class="eventAccentColor" />
      <span>
        {{ date }}
      </span>
      <span>
        {{ timeFormatted }}
      </span>
    </div>
    <div class="event__info">
      <div class="event__name">{{ name }}</div>
      <div class="event__type">{{ typeName }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps([
  "date",
  "timeTo",
  "timeFrom",
  "name",
  "typeName",
  "typeId",
]);

const timeFormatted = computed(() => {
  return `${props.timeFrom} - ${props.timeTo}`;
});

const eventAccentColor = computed(() => {
  return {
    event__accent: true,
    event__accent_purple: props.typeId === 1,
    event__accent_orange: props.typeId === 2,
  };
});
</script>

<style scoped></style>
