<template>
  <div class="calendar-day">
    <span
      class="calendar-day__number"
      :class="{ 'calendar-day__number_foreign': isForeign }"
    >
      {{ number }}
    </span>

    <span class="chip"> Мероприятие </span>
  </div>
</template>

<script setup>
defineProps(["isForeign", "number"]);
</script>

<style scoped>
.calendar-day {
  width: 150px;
  height: 100px;

  padding: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--purple-bg);
}

.calendar-day__number {
  color: var(--calendar-text-primary);

  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 21px;
}

.calendar-day__number_foreign {
  color: var(--calendar-text-muted);
}
</style>
