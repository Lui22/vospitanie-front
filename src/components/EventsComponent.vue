<template>
  <div class="events">
    <div class="events-column">
      <h1>Предстоящие мероприятия</h1>

      <div class="events-column__column">
        <EventSingleComponent
          date="19.01"
          name="Название"
          time-from="07:29"
          time-to="09:29"
          type="Мероприятие"
        />
      </div>
    </div>
    <CalendarComponent></CalendarComponent>
  </div>
</template>

<style scoped></style>

<script setup>
import CalendarComponent from "@/components/CalendarComponent.vue";
import EventSingleComponent from "@/components/EventSingleComponent.vue";
</script>
