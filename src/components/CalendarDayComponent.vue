<template>
  <div class="calendar-day">
    <span
      class="calendar-day__number"
      :class="{ 'calendar-day__number_foreign': isForeign }"
    >
      {{ number }}
    </span>

    <span v-if="hasEvent" class="chip chip_purple calendar-day__chip hoverable">
      Мероприятие
    </span>
  </div>
</template>

<script setup>
defineProps(["isForeign", "number", "hasEvent"]);
</script>

<style scoped></style>
