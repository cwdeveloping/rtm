<template>
  <div id="app">
    <Loader v-if="isLoading" />
    <section class="top__section" v-else>
      <Navbar />
      <Home />
    </section>

    <section class="content__section">
      <Counter/>
      <Why id="why"/>
      <Courses id="courses"/>
      <Gallery v-if="!isLoading"/>
      <Contact  id="contact"/>
    </section>
    
    <footer class="bottom__section">
      <Footer />
    </footer>

    <button v-show="showButton" @click="scrollToTop" class="scroll-to-top">
      <svg class="progress-circle" width="70" height="70" viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" class="circle-bg" />
        <circle cx="25" cy="25" r="20" class="circle-progress" :style="circleStyle" />
      </svg>
      <i class='bx bx-up-arrow-alt'></i>
    </button>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeMount, computed } from 'vue';
import Loader from './components/Loader.vue';
import Navbar from './sections/Navbar.vue';
import Home from './sections/Home.vue';
import Why from './sections/Why.vue';
import Courses from './sections/Courses.vue';
import Gallery from './sections/Gallery.vue';
import Counter from './sections/Counter.vue';
import Contact from './sections/Contact.vue';
import Footer from './sections/Footer.vue';

export default {
  components: {
    Loader,
    Navbar,
    Home,
    Why,
    Courses,
    Gallery,
    Counter,
    Contact,
    Footer
  },
  setup() {
    const isLoading = ref(true);
    const showButton = ref(false);
    const scrollPercent = ref(0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollPercent.value = (scrollTop / documentHeight) * 100; // Scroll foizini hisoblash

      showButton.value = scrollTop > 300; // Scroll 300px dan oshsa tugma ko'rinadi
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeMount(() => {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        isLoading.value = false;
        document.body.style.overflow = 'auto';
        document.body.style.overflowX = 'hidden';
      }, 1000);
    });

    const circleStyle = computed(() => {
      const radius = 20;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (scrollPercent.value / 100) * circumference;

      return {
        strokeDasharray: `${circumference} ${circumference}`,
        strokeDashoffset: offset,
      };
    });

    return {
      isLoading,
      showButton,
      scrollToTop,
      circleStyle
    };
  },
};
</script>

<style>
html, body {
  height: 100%; /* Barcha elementlar uchun balandlik */
  margin: 0; /* Default margin'ni olib tashlang */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Butun sahifaning balandligi */
}

.content__section {
  flex: 1; /* Kontent balandligini oshirish uchun joy beradi */
}

.bottom__section {
  background-color: #f1f1f1; /* Footerning fon rangi */
}

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 70px;
  height: 70px;
  background-color: #fff; 
  color: #046b00;
  border: none;
  border-radius: 50%;
  font-size: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  opacity: 1;
  transition: opacity 0.3s ease;
  z-index: 1000;
}

.scroll-to-top:hover {
  opacity: 1;
}

.scroll-to-top:focus {
  outline: none;
}

.progress-circle {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg); /* Progressning boshlanish nuqtasini yuqoriga o'tkazish */
}

.circle-bg {
  fill: none;
  /* stroke: #eee; */
  stroke-width: 4;
}

.circle-progress {
  fill: none;
  stroke: #00ff00; /* Progress chizig'i rangi */
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 126; /* Doira uzunligi */
  stroke-dashoffset: 126; /* Progress boshida hech narsa ko'rinmaydi */
  transition: stroke-dashoffset 0.25s;
}

</style>
