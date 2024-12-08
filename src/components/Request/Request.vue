<template>
    <div class="form-container">
      <h2 class="form-title">Оставьте заявку на тур</h2>
      <form @submit.prevent="submitForm" class="tour-form">
        <div class="form-group">
          <label for="name">Имя:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Электронная почта:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="phone">Номер телефона:</label>
          <input type="tel" id="phone" v-model="formData.phone" required />
        </div>
        <div class="form-group">
          <label for="message">Сообщение:</label>
          <textarea id="message" v-model="formData.message" rows="4" required></textarea>
        </div>
        <button type="submit" class="submit-button">Отправить заявку</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const formData = ref({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const submitForm = () => {
    console.log('Форма отправлена:', formData.value);
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  };
  </script>

<style lang="scss" scoped>

$xl: 1400px;
$lg: 1200px;
$md: 992px;
$sm: 768px;
$xs: 576px;

@mixin media($size: $xl) {
  @media (max-width: $size) {
    @content;
  }
}


.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  color: #333;
  text-align: center;
  border-radius: 10px;
  background: url(../../assets/img/request-bg.png) center / cover no-repeat;
}

.form-title {
  font-size: 40px;
  margin-bottom: 50px;
  color: #000; // Цвет заголовка

  @include media($md){
    margin-bottom: 35px;

    font-size: 28px;
  }

  @include media($xs){
    margin-bottom: 20px;

    font-size: 24px;
  }
}

.tour-form {
  background: rgba(255, 255, 255, 0.192);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333; // Цвет текста меток
}

input,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

input:focus,
textarea:focus {
  border-color: #0c0c0c;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
  outline: none;
  transform: scale(1.02);
}

input:hover,
textarea:hover {
  border-color: #000000;
  box-shadow: 0 0 8px rgba(3, 3, 3, 0.5);
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

.submit-button {
  background-color: #ffffff00;
  color: rgb(0, 0, 0);
  padding: 12px 20px;
  border: 1px solid #0000006b;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: .3s;

  @include media($xs){
    padding: 10px 20px;

    font-size: 18px;
  }
}

.submit-button:hover {
  background-color: #000000;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  color: white;
}

.submit-button:active {
  background-color: #000000;
  transform: translateY(0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

</style>