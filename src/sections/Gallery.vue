<template>
  <h1 id="events">Tadbir va voqealardan parchalar</h1>
  <div class="carousel">
    <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="carousel-slide" v-for="(slide, index) in slides" :key="index">
        <div class="overlay"></div>
        <img :src="slide.image" alt="Slide image" class="carousel-image" />
      </div>
    </div>
    <button class="carousel-button left" @click="handleManualSlide('prev')">&#10094;</button>
    <button class="carousel-button right" @click="handleManualSlide('next')">&#10095;</button>
  </div>
</template>



<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const slides = ref([
      { image: new URL('../assets/images/slider/rtm1.png', import.meta.url).href },
      { image: new URL('../assets/images/slider/rtm2.png', import.meta.url).href },
      { image: new URL('../assets/images/slider/rtm3.png', import.meta.url).href },
      { image: new URL('../assets/images/slider/rtm4.png', import.meta.url).href },
      { image: new URL('../assets/images/slider/rtm5.png', import.meta.url).href },
    ]);

    const currentSlide = ref(0);
    let intervalId = null;

    // Slayder intervalini boshlash funksiyasi
    const startAutoSlide = () => {
      intervalId = setInterval(nextSlide, 3000);
    };

    // Slayder intervalini to'xtatish funksiyasi
    const stopAutoSlide = () => {
      clearInterval(intervalId);
    };

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % slides.value.length;
    };

    const prevSlide = () => {
      currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
    };

    // Chap yoki o'ng tugmalar bosilganda slayderni yangidan boshlash
    const handleManualSlide = (direction) => {
      stopAutoSlide(); // Avtomatik sanashni to'xtatish
      if (direction === 'next') {
        nextSlide(); // O'ng tugma
      } else {
        prevSlide(); // Chap tugma
      }
      startAutoSlide(); // Sanashni qayta boshlash
    };

    onMounted(() => {
      startAutoSlide(); // Slayder avtomatik boshlansin
    });

    onBeforeUnmount(() => {
      stopAutoSlide(); // Slayder to'xtasin sahifadan chiqishda
    });

    return {
      slides,
      currentSlide,
      nextSlide,
      prevSlide,
      handleManualSlide,
    };
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 80vw;
  margin: 0 auto;
  margin-bottom: 100px;
  overflow: hidden;
  background: red;
}

h1 {
  font-size: xx-large;
  line-height: 100px;
  padding-left: 10%;
  color: #2c3e50;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: 100%;
}

.carousel-slide {
  min-width: 100%;
  position: relative;
  box-sizing: border-box;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
}

.carousel-button.left {
  left: 10px;
}

.carousel-button.right {
  right: 10px;
}

.carousel-button:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

@media screen and (max-width: 1200px) {
  .carousel {
    margin-bottom: 0px;
  }
}

@media screen and (max-width: 1024px) {
  /* .carousel {
    height: 472px;
    background: green;
  } */
}
</style>