<template>
  <main>
    <Splide :options="{ rewind: true }">
      <SplideSlide>
        <h1
          class="slider__header"
          style="background-image: url('../assets/events/1.jpg')"
        >
          В ЧРТ провели профпробу для будущих сисадминов и графических
          дизайнеров
        </h1>
      </SplideSlide>
      <SplideSlide>
        <h1
          class="slider__header"
          style="background-image: url('../assets/events/1.jpg')"
        >
          В ЧРТ провели профпробу для будущих сисадминов и графических
          дизайнеров
        </h1>
      </SplideSlide>
    </Splide>
    <EventsComponent></EventsComponent>
  </main>
</template>

<script setup>
import EventsComponent from "@/components/EventsComponent.vue";
import "@splidejs/vue-splide/css";
</script>
