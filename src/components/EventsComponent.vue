<template>
  <div class="events">
    <div class="events-column">
      <h1>Предстоящие мероприятия</h1>
    </div>
    <CalendarComponent></CalendarComponent>
  </div>
</template>

<script setup></script>

<style scoped>
.events {
  display: flex;
  column-gap: 100px;

  max-width: max-content;
  margin: auto;
}

.events-column {
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  max-width: 350px;
}
</style>

<script setup>
import CalendarComponent from "@/components/CalendarComponent.vue";
</script>
