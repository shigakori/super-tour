<template>
    <header id="navbarId" class="navbar" :class="{color: scrollDown > 5}">
        <nav class="navbar__nav container">
            <router-link to="/" class="logo">
                <img src="../../assets/img/logo.svg" alt="" class="logo__img">
            </router-link>
            <button @click="burger = !burger" class="navbar__burger">
                <i class="fa-solid fa-bars"></i>
            </button>
            <ul class="navbar__menu" :class="{ active: burger }" @click="burger=false">
                <li v-for="item, index in links" :key="index">
                    <router-link :to="item.url" class="navbar__link">{{ item.title }}</router-link>
                </li>
            </ul>
            <router-link to="/enter" class="navbar__enter">
                <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" />
            </router-link>
        </nav>
        <div class="navbar__wrapper">
            <Transition name="error">
                <div class="header__error" v-if="error">
                    <h4>Ошибка</h4>
                    <p>{{ error }}</p>
                </div>
            </Transition>
        </div>
    </header>
</template>
    
<script setup>
import { ref, computed } from "vue";
import { useShared } from "../../store/shared";

const sharedStore = useShared();

let error = computed(()=>sharedStore.error);

const links = ref([
    {title: 'Главная', url: '/'},
    {title: 'Горящие туры', url: '/tours'},
    {title: 'О нас', url: '/about'},    
    {title: 'Важно знать', url: '/need-to-know'},    
    {title: 'Контакты', url: '/contacts'},    
])

let scrollDown = ref(0);
window.addEventListener('scroll', ()=>{
    scrollDown.value = window.scrollY
})

const burger = ref(false);
</script>

<style lang="scss">
.error-enter-active,
.error-leave-active {
  transition: 0.5s linear;
}

.error-enter-from, .error-leave-to {
    opacity: 0;
    transform: translateY(-100%);
}

</style>