<template>
  <main>
    <Splide :options="{ rewind: true }">
      <SplideSlide>
        <h1
          class="slider__header"
          style="
            background-image: url('../assets/header/1.jpg');
            background-position-y: 39%;
          "
        >
          Состоялась торжественная линейка и награждение в честь Дня знаний!
        </h1>
      </SplideSlide>
      <SplideSlide>
        <h1
          class="slider__header"
          style="
            background-image: url('../assets/header/2.jpg');
            background-position-y: 43%;
          "
        >
          В ЧРТ провели концерт в день учителя
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
