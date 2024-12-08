<template>



  <footer class="footer">
    <div class="footer__container container">
      <!-- О компании -->
      <div class="footer__about">
        <router-link to="/" class="footer__logo">
          <img src="../../assets/img/logo.svg" alt="Company Logo" class="footer__logo-img" />
        </router-link>
        <p class="footer__text">Мы создаем уникальные путешествия, которые оставляют незабываемые впечатления.
          Путешествуйте с нами!</p>
      </div>

      <!-- Навигация -->
      <nav class="footer__nav">
        <h3 class="footer__title">Навигация</h3>
        <ul class="footer__menu">
          <li v-for="item, index in links" :key="index">
            <router-link :to="item.url" class="footer__link">{{ item.title }}</router-link>
          </li>
        </ul>
      </nav>

      <!-- Контакты -->
      <div class="footer__contacts">
        <h3 class="footer__title">Контакты</h3>
        <ul class="footer__contact-list">
          <li class="footer__contact-item">
            <a href="tel:+998998107090" class="footer__contact-link">+99899 810-70-90</a>
          </li>
          <li class="footer__contact-item">
            <a href="tel:+998998147090" class="footer__contact-link">+99899 814-70-90</a>
          </li>
          <li class="footer__contact-item">
            <a href="mailto:info@super-tour.uz" class="footer__contact-link">Info@super-tour.uz</a>
          </li>
          <li class="footer__contact-item">
            <p class="footer__address">Узбекистан, Ташкент, ул. Амир Темур, 10, 210-офис</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- Социальные сети -->
    

    <!-- Нижний блок -->
    <div class="footer__bottom">
      <p>&copy; 2024 Super Tour. Все права защищены.</p>
    </div>
  </footer>

</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";

onMounted(() => {
  const footerContainer = document.querySelector(".footer__container");

  const handleScroll = () => {
    const footerPosition = footerContainer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerPosition < windowHeight) {
      footerContainer.classList.add("visible");
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Удаляем слушатель при размонтировании
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});



const links = ref([
  { title: 'Главная', url: '/' },
  { title: 'Горящие туры', url: '/tours' },
  { title: 'О нас', url: '/about' },
  { title: 'Важно знать', url: '/need-to-know' },
  { title: 'Контакты', url: '/contacts' },
])
</script>







<style lang="scss" scoped>


</style>