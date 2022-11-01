<template>
  <div class="events">
    <div class="events_column events__text_single">
      <h1>
        {{ eventData.name }}
      </h1>

      <div class="event__header">
        <div :class="eventAccentColor" />
        <span class="event__type">{{ eventData.event_type_name }}</span>

        {{ eventData.date }} c {{ eventData.time_start }} до
        {{ eventData.time_end }}
      </div>

      <p class="event__description" v-if="false">
        Краткое описание мероприятия содержит в себе дополнительную информацию,
        которая непонятна из заполняемых данных. Ее заполняет пользователь,
        создающий мероприятие
      </p>
      <p class="event__description" v-if="eventId == 7">
        Встреча студентов с представителями компании "INTEC" 13 сентября 2022
        года отечественные разработчики софта, знатоки программного кода,
        алгоритмов и цифровых технологий отмечают свой профессиональный праздник
        — День программиста. <br /><br />День программиста отмечается в России в
        соответствии с указом президента от 11 сентября 2009 года. Согласно
        этому документу, День программиста празднуется на 256-й день года — 13
        сентября, а если год високосный — 12 сентября. Число 256 (два в восьмой
        степени) выбрано потому, что это количество целых чисел, которое можно
        выразить с помощью одного восьмиразрядного байта, и максимальная степень
        числа 2, которая меньше количества дней в году. <br /><br />Поздравить
        наших юных разработчиков - студентов пришли представители компании
        "INTEC". Они рассказали о стеке технологий, который необходимо знать
        современному веб - разработчику, обозначили траекторию развития студента
        как профессионала, обсудили роли в командной разработке над одним
        программным продуктом.
      </p>
      <p class="event__description" v-if="eventId == 9">
        16 сентября для студентов 1 курса ЧРТ на стадионе «Инга» МБУ СШОР №1 по
        конькобежному спорту г. Челябинск прошёл физкультурно-спортивный
        праздник «День здоровья». Цель мероприятия - популяризация физической
        культуры и спорта, популяризации и внедрение комплекса ГТО. Основными
        задачами стали: формирование навыков здорового образа жизни среди
        студентов 1 курса, выявление сильнейших команд, укрепление дружеских
        отношений между соревнующимися.
      </p>
      <p class="event__description" v-if="eventId == 14">
        Студенты ЧРТ в это день организовали праздничный концерт, который
        посвятили двум праздничным датам: Дню СПО (2 октября) и Дню учителя (5
        октября). В качестве поздравлений для своих педагогов ребятами
        подготовили песни и танцы, стихи и сценки. Выступления всех артистов
        вызывали бурные аплодисменты в зале. Зрители оценили, сколько
        талантливых ребят в числе первокурсников поступило в техникум в этом
        учебном году. Также своим выступлением порадовала присутствующих в зале
        преподаватель Ольга Владимировна Машукова, которая продекламировала
        замечательное стихотворение об осени. <br /><br />
        Праздник удался на славу! Спасибо студентам и советнику директора по
        воспитанию Татьяне Сергеевне Королевой за яркий и прекрасный концерт!
      </p>
      <p class="event__description" v-if="eventId == 15">
        С целью расширения знаний студентов о героических страницах истории
        города Челябинска и нашего Отечества, воспитания гражданственности,
        патриотизма, чувства гордости и уважения к историческому наследию
        города, 3 октября в Челябинском радиотехническом техникуме прошел общий
        классный час для студентов 1 курса, посвященный Дню Героев Танкограда,
        который отмечается 6 октября. <br /><br />
        В жизни всегда есть место подвигу, но путь к нему лежит через воспитание
        в себе чувства долга, ответственного отношения к своим обязанностям,
        нравственной стойкости. И мужество остается мужеством, даже если оно –
        расплата за чью-то беспечность. <br /><br />Классный час подготовили и
        провели группа Рк-257 с классным руководителем Алёной Владимировной
        Черных.
      </p>

      <div v-if="eventId == 1">
        <h2>Фотоотчет</h2>
        <div class="event__photos">
          <img alt="" class="event__photo" src="../assets/events/1/1.jpg" />
          <img alt="" class="event__photo" src="../assets/events/1/2.jpg" />
          <img alt="" class="event__photo" src="../assets/events/1/3.jpg" />
          <img alt="" class="event__photo" src="../assets/events/1/4.jpg" />
          <img alt="" class="event__photo" src="../assets/events/1/5.jpg" />
        </div>
      </div>
      <div v-if="eventId == 7">
        <h2>Фотоотчет</h2>
        <div class="event__photos">
          <img alt="" class="event__photo" src="../assets/events/7/1.jpg" />
          <img alt="" class="event__photo" src="../assets/events/7/2.jpg" />
          <img alt="" class="event__photo" src="../assets/events/7/3.jpg" />
          <img alt="" class="event__photo" src="../assets/events/7/4.jpg" />
        </div>
      </div>
      <div v-if="eventId == 9">
        <h2>Фотоотчет</h2>
        <div class="event__photos">
          <img alt="" class="event__photo" src="../assets/events/9/1.jpg" />
          <img alt="" class="event__photo" src="../assets/events/9/2.jpg" />
          <img alt="" class="event__photo" src="../assets/events/9/3.jpg" />
          <img alt="" class="event__photo" src="../assets/events/9/4.jpg" />
          <img alt="" class="event__photo" src="../assets/events/9/5.jpg" />
          <img alt="" class="event__photo" src="../assets/events/9/6.jpg" />
          <img alt="" class="event__photo" src="../assets/events/9/7.jpg" />
        </div>
      </div>
      <div v-if="eventId == 14">
        <h2>Фотоотчет</h2>
        <div class="event__photos">
          <img alt="" class="event__photo" src="../assets/events/14/1.jpg" />
          <img alt="" class="event__photo" src="../assets/events/14/2.jpg" />
          <img alt="" class="event__photo" src="../assets/events/14/3.jpg" />
          <img alt="" class="event__photo" src="../assets/events/14/4.jpg" />
          <img alt="" class="event__photo" src="../assets/events/14/5.jpg" />
          <img alt="" class="event__photo" src="../assets/events/14/6.jpg" />
          <img alt="" class="event__photo" src="../assets/events/14/7.jpg" />
          <img alt="" class="event__photo" src="../assets/events/14/8.jpg" />
        </div>
      </div>
      <div v-if="eventId == 15">
        <h2>Фотоотчет</h2>
        <div class="event__photos">
          <img alt="" class="event__photo" src="../assets/events/15/1.jpg" />
          <img alt="" class="event__photo" src="../assets/events/15/2.jpg" />
          <img alt="" class="event__photo" src="../assets/events/15/3.jpg" />
          <img alt="" class="event__photo" src="../assets/events/15/4.jpg" />
          <img alt="" class="event__photo" src="../assets/events/15/5.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosRequest from "@/helpers/axiosRequest";
import { useRoute } from "vue-router";

const route = useRoute();

const eventData = ref({});
const eventId = route.params.eventId;
const getInfo = async () => {
  eventData.value = (await axiosRequest.get(`event/${eventId}`)).data.data;
};

onMounted(() => {
  getInfo();
});

const eventAccentColor = computed(() => {
  return {
    event__accent: true,
    event__accent_gray: eventData.value.event_type_id === 1,
    event__accent_orange: eventData.value.event_type_id === 2,
    event__accent_blue: eventData.value.event_type_id === 3,
    event__accent_red: eventData.value.event_type_id === 4,
    event__accent_green: eventData.value.event_type_id === 5,
    event__accent_yellow: eventData.value.event_type_id === 6,
    event__accent_pink: eventData.value.event_type_id === 7,
    event__accent_teal: eventData.value.event_type_id === 8,
    event__accent_purple: eventData.value.event_type_id === 9,
    event__accent_border: eventData.value.event_type_id === 10,
  };
});
</script>

<style scoped></style>
