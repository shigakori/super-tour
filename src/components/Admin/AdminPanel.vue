<template>
  <div class="form-container">
    <h2 class="form-title">Добавить новый тур</h2>
    <form @submit.prevent="addTour" class="tour-form">
      <div class="form-group">
        <label for="title">Название:</label>
        <input type="text" v-model="newTour.title" required />
      </div>
      <div class="form-group">
        <label for="sdesc">Краткое описание:</label>
        <input type="text" v-model="newTour.sdesc" required />
      </div>
      <div class="form-group">
        <label for="desc">Описание:</label>
        <textarea v-model="newTour.desc" required></textarea>
      </div>
      <div class="form-group">
        <label for="img">Изображение URL:</label>
        <input type="text" v-model="newTour.img" required />
      </div>
      <button type="submit" class="submit-button">Добавить тур</button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['tourAdded']);

const newTour = ref({
  title: '',
  sdesc: '',
  desc: '',
  img: '',
});

const addTour = () => {
  if (newTour.value.title && newTour.value.img) {
    emit('tourAdded', { ...newTour.value });
    newTour.value = { title: '', sdesc: '', desc: '', img: '' };
  }
};
</script>

<style scoped lang="scss">

</style>
