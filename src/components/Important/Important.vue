<template>
    <div class="important-header">
      <div class="important-header__item">
        <div class="important-header__overlay">
          <div class="important-header__info">
            <h1 class="important-header__title">Самое важное о турах для путешественников</h1>
            <p class="important-header__desc">Полезная информация для путешественников</p>
          </div>
        </div>
        <img src="../../assets/img/dubai.jpg" class="important-header__img" />
      </div>
    </div>
  
    <section class="important">
      <div class="important__page container">
        <h1 class="important__title">Полезная информация для путешественников</h1>
        <p class="important__desc">
          Чтобы ваша поездка прошла максимально комфортно и безопасно, предлагаем
          ознакомиться с полезными советами:
        </p>
        <div class="important__content">
          <div class="important__card">
            <i class="fa-solid fa-book important__icon"></i>
            <h2 class="important__stitle">Документы</h2>
            <div class="important__stitle-underline"></div>
            <p class="important__sdesc">
              Убедитесь, что у вас есть все необходимые документы: паспорт, виза (если
              требуется), авиабилеты.
            </p>
          </div>
          <div class="important__card">
            <i class="fa-solid fa-virus-slash important__icon"></i>
            <h2 class="important__stitle">Страховка</h2>
            <div class="important__stitle-underline"></div>
            <p class="important__sdesc">
              Оформите медицинскую страховку, которая покрывает расходы на экстренную
              помощь и лечение за рубежом.
            </p>
          </div>
          <div class="important__card">
            <i class="fa-solid fa-copy important__icon"></i>
            <h2 class="important__stitle">Копии документов</h2>
            <div class="important__stitle-underline"></div>
            <p class="important__sdesc">
              Сделайте копии важных документов и храните их отдельно от оригиналов.
            </p>
          </div>
        </div>
      </div>
    </section>
  
    <section class="advice">
    <div class="advice__page container">
      <div class="advice__content">
        <h1 class="advice__title">Советы по поездке</h1>
        <div class="advice__tabs-wrapper">
          <div class="advice__tabs">
            <button class="advice__tab active">Подготовка к поездке</button>
            <button class="advice__tab">Безопасность и поведение</button>
          </div>
          <div class="advice__description">
            <p class="advice__text">
                Ознакомьтесь с климатом, культурой и традициями страны, которую собираетесь посетить. А также изучите карту местности и наметьте предварительный маршрут и подготовьте необходимые вещи и аксессуары с учетом сезона и особенностей региона.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Request />

  
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import Request from '../Request/Request.vue';
  
  onMounted(() => {
    const adviceTabs = document.querySelectorAll('.advice__tab');
    const adviceDescription = document.querySelector('.advice__description');
  
    const tabContents = [
      'Ознакомьтесь с климатом, культурой и традициями страны, которую собираетесь посетить. А также изучите карту местности и наметьте предварительный маршрут и подготовьте необходимые вещи и аксессуары с учетом сезона и особенностей региона.',
      'Будьте бдительны в незнакомых местах и не демонстрируйте ценные вещи. Соблюдайте местные законы и уважайте традиции страны. Держите при себе контакты экстренных служб и посольства.',
    ];
  
    adviceTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        adviceTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
  
        adviceDescription.querySelector('.advice__text').textContent =
          tabContents[index];
  
        adviceDescription.classList.remove('fade-in');
        void adviceDescription.offsetWidth;
        adviceDescription.classList.add('fade-in');
      });
    });
  });
  </script>
  
  <style lang="scss" scoped></style>
  