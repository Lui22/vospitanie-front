<template>
  <div class="calendar-day">
    <span
      :class="{ 'calendar-day__number_foreign': isForeign }"
      class="calendar-day__number"
    >
      {{ number }}
    </span>

    <span v-if="event" :class="chipClasses"> Мероприятие </span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["isForeign", "number", "event"]);

const chipClasses = computed(() => {
  return {
    chip: true,
    "calendar-day__chip": true,
    hoverable: true,
    chip_purple: props.event?.event_type_id === 1,
    chip_orange: props.event?.event_type_id === 2,
  };
});
</script>

<style scoped></style>
