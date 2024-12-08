<template>
    <header class="header" :class="{color: scrollDown > 5}">
        <div class="header__container">
            <div class="header__item layer-1"></div>
            <div class="header__item layer-2"></div>
            <div class="header__item layer-3">
                <div class="header__content">
                    <h1 class="header__title">Super Tour</h1>
                    <p class="header__desc">Вы найдете туры по Узбекистану, а так же по всему миру только у нас</p>
                    <BtnMore />
                </div>
                
                <div class="navi">
                <ul class="navi__menu" :class="{ active: burger }" @click="burger=false">
                    <li v-for="item, index in links" :key="index">
                        <router-link :to="item.url" class="navi__link">
                            {{ item.title }}
                        </router-link>
                    </li>

                </ul>
            </div>
            </div>
            <div class="header__item layer-4">
                <canvas ref="rainCanvas" class="rain"></canvas>
            </div>

            

            <div class="navbar__wrapper">
            <Transition name="error">
                <div class="header__error" v-if="error">
                    <h4>Ошибка</h4>
                    <p>{{ error }}</p>
                </div>
            </Transition>
        </div>

        </div>
    </header>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import BtnMore from '../UI/BtnMore.vue';
import { useShared } from "../../store/shared";

const sharedStore = useShared();

let error = computed(()=>sharedStore.error);

const links = ref([
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

const rainCanvas = ref(null);
const ctx = ref(null);

onMounted(() => {
  // Проверяем, что rainCanvas инициализирован
  if (rainCanvas.value) {
    ctx.value = rainCanvas.value.getContext('2d');
    console.log('Canvas context initialized:', ctx.value);
    startRain();
  } else {
    console.error('rainCanvas is null');
  }
});

function startRain() {
  const raindrops = [];
  for (let i = 0; i < 100; i++) {
    raindrops.push(new Raindrop(Math.random() * 800, Math.random() * 600, Math.random() * 10 + 1));
  }

  const animate = () => {
    if (!ctx.value || !rainCanvas.value) {
      console.error('Context or canvas is not available');
      return; // Проверка на наличие контекста и canvas
    }
    
    ctx.value.clearRect(0, 0, rainCanvas.value.width, rainCanvas.value.height);
    raindrops.forEach(drop => {
      drop.fall();
      ctx.value.fillStyle = 'white';
      ctx.value.fillRect(drop.x, drop.y, .05, 15); // Рисуем каплю
    });
    requestAnimationFrame(animate);
  };

  animate();
}

class Raindrop {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  fall() {
    this.y += this.speed;
    if (this.y > 600) { // Используем фиксированное значение высоты canvas
      this.y = 0; // Сброс капли на верх экрана
      this.x = Math.random() * 800; // Используем фиксированное значение ширины canvas
    }
  }
}


function onMousemove(){
    document.addEventListener('mousemove', e =>{
        Object.assign(document.documentElement, {
            style: `
                --move-x: ${(e.clientX - innerWidth / 2) * -.01}deg;
                --move-y: ${(e.clientY - innerHeight / 2) * -.02}deg;
            `
        })
    })
}
onMousemove();

</script>

<style lang="scss" scoped>

canvas {
    width: 100%;
}

</style>