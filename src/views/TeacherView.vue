<template>
  <div class="events">
    <div class="events_column">
      <h1>Педагогам</h1>

      <h2>Создать мероприятие</h2>
      <NewEventComponent />

      <h2>Рабочие программы воспитания обучающихся</h2>
      <ul class="events__text">
        <li>
          <a class="chip chip_purple chip_link" href="#">
            <img src="../assets/icons/link-45deg.svg" alt="" />

            <span>
              09.02.06 Сетевое и системное администрирование 2022–2026 гг.
            </span>
          </a>
        </li>
        <li>
          <a class="chip chip_purple chip_link" href="#">
            <img src="../assets/icons/link-45deg.svg" alt="" />

            <span>
              09.02.07 (Разработчик веб и мультимедийных приложений) 2022–2026
              гг.
            </span>
          </a>
        </li>
        <li>
          <a class="chip chip_purple chip_link" href="#">
            <img src="../assets/icons/link-45deg.svg" alt="" />

            <span>09.02.07 (Программист) 2022–2026 гг.</span>
          </a>
        </li>
        <li>
          <a class="chip chip_purple chip_link" href="#">
            <img src="../assets/icons/link-45deg.svg" alt="" />

            <span>
              10.02.05 Обеспечение информационной безопасности
              автоматизированных систем 2022–2026 гг.
            </span>
          </a>
        </li>
        <li>
          <a class="chip chip_purple chip_link" href="#">
            <img src="../assets/icons/link-45deg.svg" alt="" />

            <span>
              11.02.16 Монтаж, техническое обслуживание и ремонт электронных
              приборов и устройств 2022–2026 гг.
            </span>
          </a>
        </li>
        <li>
          <a class="chip chip_purple chip_link" href="#">
            <img src="../assets/icons/link-45deg.svg" alt="" />

            <span>42.02.01 Реклама 2022–2026 гг. </span>
          </a>
        </li>
      </ul>

      <h2>Полезные ссылки</h2>
      <ul class="text-links events__text">
        <li>
          <a
            class="text__link text__link_image hoverable"
            href="https://infourok.ru/"
          >
            <img src="../assets/links/logo-redesign.svg" alt="" />
            <span>Образовательный портал Инфоурок</span>
          </a>
        </li>
        <li>
          <a
            class="text__link text__link_image hoverable"
            href="https://ipo.msk.ru/povyshenie-kvalifikacii/"
          >
            <img src="../assets/links/main-logo.png" alt="" />
            <span
              >Повышение квалификации в Институте профессионального
              образования</span
            >
          </a>
        </li>
        <li>
          <a
            class="text__link text__link_image hoverable"
            href="https://razgovor.edsoo.ru/"
          >
            <img src="../assets/links/r.jpg" alt="" />
            <span>Разговоры о важном</span>
          </a>
        </li>
        <li>
          <a
            class="text__link text__link_image hoverable"
            href="https://education.apkpro.ru/"
          >
            <img src="../assets/links/apkpro.svg" alt="" />
            <span
              >Цифровая экосистема дополнительного профессионального
              образования</span
            >
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
<script>
import NewEventComponent from "@/components/NewEventComponent.vue";
export default {
  components: { NewEventComponent },
};
</script>
