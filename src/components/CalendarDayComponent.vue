<template>
  <div class="calendar-day">
    <span
      :class="{ 'calendar-day__number_foreign': isForeign }"
      class="calendar-day__number"
    >
      {{ number }}
    </span>

    <span v-if="event" :class="chipClasses"> {{ event.event_type_name }} </span>
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
    chip_gray: props.event?.event_type_id === 1,
    chip_orange: props.event?.event_type_id === 2,
    chip_blue: props.event?.event_type_id === 3,
    chip_red: props.event?.event_type_id === 4,
    chip_green: props.event?.event_type_id === 5,
    chip_yellow: props.event?.event_type_id === 6,
    chip_pink: props.event?.event_type_id === 7,
    chip_teal: props.event?.event_type_id === 8,
    chip_purple: props.event?.event_type_id === 9,
  };
});
</script>

<style scoped></style>
