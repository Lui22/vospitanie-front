<template>
  <div class="events">
    <div class="events_column fluid">
      <h1>Студентам</h1>

      <h2>Полезные ссылки</h2>
      <ul class="text-links events__text">
        <li>
          <a
            class="text__link text__link_image hoverable"
            href="https://vk.com/pomogi74"
          >
            <img src="../assets/links/a_d313f44b.jpg" alt="" />
            <span>Волонтерское движение Челябинской области</span>
          </a>
        </li>
        <li>
          <a
            class="text__link text__link_image hoverable"
            href="https://sportgorod74.ru"
          >
            <img
              src="../assets/links/Шапка-сайта-прозрачная-2048x211.png"
              alt=""
            />
            <span>Спортивный город</span>
          </a>
        </li>
        <li>
          <a
            class="text__link text__link_image hoverable"
            href="https://ospk.ru/"
          >
            <img src="../assets/links/Blood.jpg" alt="" />
            <span>Челябинская областная станция переливания крови</span>
          </a>
        </li>
        <li>
          <a
            class="text__link text__link_image hoverable"
            href="https://ospk.ru/"
          >
            <img src="../assets/links/aXDEvg4Enf0.jpg" alt="" />
            <span>Центр профилактического сопровождения "КОМПАС"</span>
          </a>
        </li>
      </ul>

      <h2>Предложить мероприятие</h2>
      <NewEventComponent />
    </div>
  </div>
</template>

<style scoped></style>

<script setup>
import NewEventComponent from "@/components/NewEventComponent.vue";
</script>
