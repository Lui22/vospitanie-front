<template>
  <div class="event hoverable">
    <div class="event__header">
      <div class="event__accent event__accent_purple" />
      <span>
        {{ date }}
      </span>
      <span>
        {{ timeFormatted }}
      </span>
    </div>
    <div class="event__info">
      <div class="event__name">{{ name }}</div>
      <div class="event__type">{{ type }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps(["date", "timeTo", "timeFrom", "name", "type"]);

const timeFormatted = computed(() => {
  return `${props.timeFrom} - ${props.timeTo}`;
});
</script>

<style scoped></style>
