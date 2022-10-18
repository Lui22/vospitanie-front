<template>
  <div class="calendar">
    <div class="calendar-header">
      <h2>Октябрь 2022</h2>

      <div class="calendar-buttons">
        <div class="calendar-button">
          <img src="src/assets/icons/chevron-left.svg" />
        </div>
        <div class="calendar-button">
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
      <div class="calendar-grid__grid">
        <CalendarDayComponent :is-foreign="true" :number="26" />
        <CalendarDayComponent :is-foreign="true" :number="27" />
        <CalendarDayComponent :is-foreign="true" :number="28" />
        <CalendarDayComponent :is-foreign="true" :number="29" />
        <CalendarDayComponent :is-foreign="true" :number="30" />
        <CalendarDayComponent :is-foreign="false" :number="1" />
        <CalendarDayComponent :is-foreign="false" :number="2" />
        <CalendarDayComponent :is-foreign="false" :number="3" />
        <CalendarDayComponent :is-foreign="false" :number="4" />
        <CalendarDayComponent :is-foreign="false" :number="5" />
        <CalendarDayComponent :is-foreign="false" :number="6" />
        <CalendarDayComponent :is-foreign="false" :number="7" />
        <CalendarDayComponent :is-foreign="false" :number="8" />
        <CalendarDayComponent :is-foreign="false" :number="9" />
        <CalendarDayComponent :is-foreign="false" :number="10" />
        <CalendarDayComponent :is-foreign="false" :number="11" />
        <CalendarDayComponent :is-foreign="false" :number="12" />
        <CalendarDayComponent :is-foreign="false" :number="13" />
        <CalendarDayComponent :is-foreign="false" :number="14" />
        <CalendarDayComponent :is-foreign="false" :number="15" />
        <CalendarDayComponent :is-foreign="false" :number="16" />
        <CalendarDayComponent :is-foreign="false" :number="17" />
        <CalendarDayComponent :is-foreign="false" :number="18" />
        <CalendarDayComponent :is-foreign="false" :number="19" />
        <CalendarDayComponent :is-foreign="false" :number="20" />
        <CalendarDayComponent :is-foreign="false" :number="21" />
        <CalendarDayComponent :is-foreign="false" :number="22" />
        <CalendarDayComponent :is-foreign="false" :number="23" />
        <CalendarDayComponent :is-foreign="false" :number="24" />
        <CalendarDayComponent :is-foreign="false" :number="25" />
        <CalendarDayComponent :is-foreign="false" :number="26" />
        <CalendarDayComponent :is-foreign="false" :number="27" />
        <CalendarDayComponent :is-foreign="false" :number="28" />
        <CalendarDayComponent :is-foreign="false" :number="29" />
        <CalendarDayComponent :is-foreign="false" :number="30" />
        <CalendarDayComponent :is-foreign="false" :number="31" />
        <CalendarDayComponent :is-foreign="true" :number="1" />
        <CalendarDayComponent :is-foreign="true" :number="2" />
        <CalendarDayComponent :is-foreign="true" :number="3" />
        <CalendarDayComponent :is-foreign="true" :number="4" />
        <CalendarDayComponent :is-foreign="true" :number="5" />
        <CalendarDayComponent :is-foreign="true" :number="6" />
      </div>
    </div>
  </div>
</template>
<script setup>
import CalendarDayComponent from "@/components/CalendarDayComponent.vue";
</script>

<style scoped>
.calendar {
  padding: 20px;

  display: flex;
  flex-direction: column;
  row-gap: 25px;

  background: var(--white-bg);

  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.calendar-buttons {
  display: flex;
  column-gap: 15px;
}

.calendar-button {
  width: 35px;
  height: 35px;

  border-radius: 5px;
  border: 2px solid var(--purple-bg);

  display: flex;
  align-items: center;
  justify-content: center;
}

.calendar-grid {
  border-radius: 8px;

  overflow: clip;
}

.calendar-grid-header {
  background: var(--purple-bg);

  display: flex;
}

.calendar-grid-header__item {
  font: var(--calendar-header);
  color: var(--purple-primary);

  padding: 20px 12px;

  width: 150px;
  height: 59px;
}

.calendar-grid__grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
</style>
