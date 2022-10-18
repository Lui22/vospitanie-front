<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <nav class="header-nav">
      <RouterLink class="header-nav__item chip chip_purple chip_big" to="/">
        Home
      </RouterLink>
      <RouterLink
        class="header-nav__item chip chip_purple chip_big"
        to="/parent"
      >
        Родителям
      </RouterLink>
      <RouterLink
        class="header-nav__item chip chip_purple chip_big"
        to="/teacher"
      >
        Педагогам
      </RouterLink>
      <RouterLink
        class="header-nav__item chip chip_purple chip_big"
        to="/student"
      >
        Студентам
      </RouterLink>
      <div class="header-nav__item chip chip_purple chip_big">
        Консультационная поддержка
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
