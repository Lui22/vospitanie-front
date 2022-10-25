<template>
  <div class="calendar">
    <div class="calendar-header">
      <h2 v-if="monthInfo !== 'undefined undefined'">{{ monthInfo }}</h2>
      <div class="calendar-buttons">
        <div class="button" @click="decreaseMonth">
          <img src="src/assets/icons/chevron-left.svg" />
        </div>
        <div class="button" @click="increaseMonth">
          <img src="src/assets/icons/chevron-right.svg" />
        </div>
      </div>
    </div>

    <div class="calendar-grid">
      <div class="calendar-grid-header">
        <div class="calendar-grid-header__item">Понедельник</div>
        <div class="calendar-grid-header__item">Вторник</div>
        <div class="calendar-grid-header__item">Среда</div>
        <div class="calendar-grid-header__item">Четверг</div>
        <div class="calendar-grid-header__item">Пятница</div>
        <div class="calendar-grid-header__item">Суббота</div>
        <div class="calendar-grid-header__item">Воскресенье</div>
      </div>
      <div class="calendar-grid__grid" ref="targetEl">
        <CalendarDayComponent
          v-for="(el, ind) in calendar.days"
          :key="ind"
          :event="el.event"
          :is-foreign="el.is_foreign"
          :number="el.day"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import CalendarDayComponent from "@/components/CalendarDayComponent.vue";
import { computed, onMounted, ref, watch } from "vue";
import axiosRequest from "@/helpers/axiosRequest";
import { useCalendarStore } from "@/stores/calendar";
import { storeToRefs } from "pinia";
import { useMotion } from "@vueuse/motion";
import scrollTransition from "@/helpers/scrollTransition";

const targetEl = ref();
const { apply } = useMotion(targetEl, scrollTransition);

const calendarStore = useCalendarStore();
const { monthNumber } = storeToRefs(calendarStore);
const { increaseMonth, decreaseMonth } = calendarStore;

const calendar = ref([]);
const getCalendar = async () => {
  try {
    console.log(monthNumber.value);
    calendar.value = (
      await axiosRequest.get("calendar", {
        params: {
          monthNumber: monthNumber.value,
        },
      })
    ).data;
    apply("enter");
  } catch (e) {
    console.log(e);
  }
};

const monthInfo = computed(() => {
  return `${calendar.value.month_name} ${calendar.value.year}`;
});

onMounted(() => {
  getCalendar();
});

watch(monthNumber, (value, oldValue) => {
  if (value > oldValue) {
    apply("to_right");
  } else if (value < oldValue) {
    apply("to_left");
  }

  getCalendar(monthNumber.value);
});
</script>

<style scoped></style>
