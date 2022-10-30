<script setup>
import { RouterLink, RouterView } from "vue-router";
import ChatComponent from "@/components/ChatComponent.vue";
import { useChatStore } from "@/stores/modals";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import axiosRequest from "@/helpers/axiosRequest";

const chatStore = useChatStore();
const { isChatOpened } = storeToRefs(chatStore);
const { openChat, closeChat } = chatStore;

const loadTempUser = async () => {
  try {
    const tempUserToken = (await axiosRequest.post("tempUser")).data.api_token;

    console.log(tempUserToken);
    localStorage.setItem("bearer", tempUserToken);
  } catch (e) {
    console.log(e);
  }
};

onMounted(() => {
  if (!localStorage.getItem("bearer")) loadTempUser();
});
</script>

<template>
  <ChatComponent v-if="isChatOpened" @close="closeChat" />

  <header class="header">
    <nav class="header-nav">
      <RouterLink class="header-nav__item chip chip_purple chip_big" to="/">
        Календарь мероприятий
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
      <div class="header-nav__item chip chip_purple chip_big" @click="openChat">
        Консультационная поддержка
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
