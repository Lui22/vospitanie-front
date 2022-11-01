<template>
  <div class="event hoverable" @click="openEvent">
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
import { useRouter } from "vue-router";

const props = defineProps([
  "id",
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
    event__accent_gray: props.typeId === 1,
    event__accent_orange: props.typeId === 2,
    event__accent_blue: props.typeId === 3,
    event__accent_red: props.typeId === 4,
    event__accent_green: props.typeId === 5,
    event__accent_yellow: props.typeId === 6,
    event__accent_pink: props.typeId === 7,
    event__accent_teal: props.typeId === 8,
    event__accent_purple: props.typeId === 9,
  };
});

const router = useRouter();
const openEvent = () => {
  router.push(`/event/${props.id}`);
};
</script>

<style scoped></style>
