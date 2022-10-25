<template>
  <div class="events">
    <div class="events-column">
      <h1>Предстоящие мероприятия</h1>

      <div ref="targetEl" class="events-column__column">
        <EventSingleComponent
          v-for="(el, ind) in events"
          :key="ind"
          :date="el.date"
          :name="el.name"
          :time-from="el.time_start"
          :time-to="el.time_end"
          :type-id="el.event_type_id"
          :type-name="el.event_type_name"
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
import { onMounted, ref, watch } from "vue";
import axiosRequest from "@/helpers/axiosRequest";
import { useCalendarStore } from "@/stores/calendar";
import { storeToRefs } from "pinia";
import { useMotion } from "@vueuse/motion";
import scrollTransition from "@/helpers/scrollTransition";
import fadeTransition from "@/helpers/fadeTransition";

const targetEl = ref();
const { apply } = useMotion(targetEl, fadeTransition);

const calendarStore = useCalendarStore();
const { monthNumber } = storeToRefs(calendarStore);
const { initializeWithCurrentMonth } = calendarStore;

const events = ref([]);

const getEvents = async () => {
  try {
    events.value = (
      await axiosRequest.get("event", {
        params: {
          monthNumber: monthNumber.value,
        },
      })
    ).data.data;
    apply("enter");
  } catch (e) {
    console.log(e.toJSON());
  }
};

onMounted(async () => {
  initializeWithCurrentMonth();
  getEvents();
});

watch(monthNumber, () => {
  apply("initial");

  getEvents();
});
</script>
