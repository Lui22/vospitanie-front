import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ParentView from "../views/ParentView.vue";
import StudentView from "../views/StudentView.vue";
import TeacherView from "../views/TeacherView.vue";
import SingleEventView from "../views/SingleEventView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/parent",
      name: "parent",
      component: ParentView,
    },
    {
      path: "/student",
      name: "student",
      component: StudentView,
    },
    {
      path: "/teacher",
      name: "teacher",
      component: TeacherView,
    },
    {
      path: "/event/:eventId",
      component: SingleEventView,
    },
  ],
});

export default router;
