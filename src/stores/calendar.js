import { defineStore } from "pinia";
import { ref } from "vue";

export const useCalendarStore = defineStore("calendar", () => {
  const monthNumber = ref();

  const increaseMonth = () => {
    monthNumber.value++;
  };

  const decreaseMonth = () => {
    monthNumber.value--;
  };

  const initializeWithCurrentMonth = () => {
    const now = new Date();
    monthNumber.value = now.getMonth() + 1;
  };

  return {
    monthNumber,
    increaseMonth,
    decreaseMonth,
    initializeWithCurrentMonth,
  };
});
