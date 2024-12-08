<template>
  <section class="tours">
    <div class="tours__list">
      <div v-for="(item, index) in items" :key="index" class="tours__item" :class="{ active: index === itemActive }">
        <img class="tours__img" :src="item.img" alt="Tour Image">
        <div class="tours__info">
          <p class="tours__sdesc">{{ item.sdesc }}</p>
          <h1 class="tours__title">{{ item.title }}</h1>
          <p class="tours__desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>

    <div class="tours__arrows">
      <button id="prev" @click="prevClick"><i class="fa-solid fa-chevron-left"></i></button>
      <button id="next" @click="nextClick"><i class="fa-solid fa-chevron-right"></i></button>
    </div>

    <div class="tours__thumbnail">
      <div v-for="(item, index) in items" :key="index" class="tours__content" :class="{ active: index === itemActive }" @click="setActive(index)">
        <img :src="item.img" class="tours__content-img" alt="Thumbnail Image">
        <div class="tours__content-title">{{ item.title }}</div>
      </div>
    </div>
  </section>

  <section class="tours__cards container">
    <h2 class="cards__title">Популярные туры</h2>
    <div class="cards__list">
      <div v-for="(item, index) in items" :key="index" class="card">
        <img :src="item.img" class="card__img" alt="Tour Image">
        <div class="card__info">
          <h3 class="card__title">{{ item.title }}</h3>
          <p class="card__sdesc">{{ item.sdesc }}</p>
          <p class="card__desc">{{ item.desc }}</p>
          <router-link :to="{ name: 'tour', params: { id: index } }" class="card__button">Узнать больше</router-link>
        </div>
      </div>
    </div>
  </section>

  <AdminPanel @tourAdded="addTour" />
</template>

<script setup>
import { ref } from 'vue';
// import AdminPanel from '../Admin/AdminPanel.vue';

const items = ref([
  { img: require('../../assets/img/dubai.jpg'), sdesc: 'supertour', title: 'Дубай', desc: 'Приглашаем вас в незабываемое путешествие в Дубай — один из самых ярких и современных городов мира. Этот тур подарит вам уникальную возможность насладиться великолепием архитектуры, богатством культуры и захватывающими развлечениями, которые предлагает Дубай.' },
  { img: require('../../assets/img/thailand.jpg'), sdesc: 'supertour', title: 'Таиланд', desc: 'Приглашаем вас в захватывающее путешествие в Таиланд — страну, известную своими потрясающими пляжами, богатой культурой и дружелюбными людьми. Этот тур подарит вам уникальную возможность насладиться великолепием природы, историческими памятниками и вкусной тайской кухней.' },
  { img: require('../../assets/img/turkey.jpg'), sdesc: 'supertour', title: 'Турция', desc: 'Приглашаем вас в увлекательное путешествие по Турции — стране, где встречаются восточные традиции и западная культура. Этот тур подарит вам возможность исследовать исторические памятники, насладиться великолепными пейзажами и попробовать вкуснейшую турецкую кухню.' },
  { img: require('../../assets/img/maldives.jpg'), sdesc: 'supertour', title: 'Мальдивы', desc: 'Приглашаем вас в незабываемое путешествие на Мальдивы — архипелаг, известный своими белоснежными пляжами, кристально чистыми водами и роскошными курортами. Этот тур подарит вам возможность насладиться спокойствием, романтикой и красотой тропического рая.' },
  { img: require('../../assets/img/egypt.jpg'), sdesc: 'supertour', title: 'Египет', desc: 'Приглашаем вас в увлекательное путешествие в Египет — страну, полную древних тайн и великолепных пейзажей. Этот тур позволит вам исследовать величественные пирамиды, насладиться красотой Нила и погрузиться в уникальную культуру и историю.' },
]);

const itemActive = ref(0);

const nextClick = () => {
  itemActive.value = (itemActive.value + 1) % items.value.length;
};

const prevClick = () => {
  itemActive.value = (itemActive.value - 1 + items.value.length) % items.value.length;
};

const setActive = (index) => {
  itemActive.value = index;
};

// Метод для добавления нового тура
const addTour = (tour) => {
  items.value.push(tour);
};
</script>

<style lang="scss" scoped>
/* Ваши стили */
</style>
