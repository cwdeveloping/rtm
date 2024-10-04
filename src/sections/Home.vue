<template>
  <div class="home content">
    <div class="home__row">
      <p class="home__subtitle" :class="{ 'animate__animated animate__bounceInLeft': isMounted }">
        Raqamli Texnologiyalar Markazi
      </p>
      <h1 class="home__title">
        {{ displayedTitle }}
        <span class="cursor" :class="{ 'active': isCursorActive }">|</span>
      </h1>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import 'animate.css';

export default {
  setup(props, { emit }) {
    const title = "Kelajakka ishonchli qadam!";
    const displayedTitle = ref("");
    const currentIndex = ref(0);
    const isCursorActive = ref(true);
    const isMounted = ref(false);

    onMounted(() => {
      setTimeout(() => {
        startAnimation();
      }, 1600);
      blinkCursor();
      emit('loaded');
      isMounted.value = true;
      setInterval(() => {
        startAnimation();
      }, 10000);
    });

    const startAnimation = () => {
      displayedTitle.value = "";
      currentIndex.value = 0;
      animateText();
    };

    const animateText = () => {
      if (currentIndex.value < title.length) {
        displayedTitle.value += title[currentIndex.value];
        currentIndex.value++;
        setTimeout(animateText, 85);
      }
    };

    const blinkCursor = () => {
      setInterval(() => {
        isCursorActive.value = !isCursorActive.value;
      }, 500);
    };

    return {
      displayedTitle,
      isCursorActive,
      isMounted
    };
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 590px;
  display: flex;
  justify-content: center;
}

.animate__bounceInLeft {
  animation-duration: 1s !important;
  animation-delay: 0.8s !important;
}

.home__row {
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}

.home__title {
  text-align: left;
  width: 700px;
  height: 110px;
  font-size: 65px;
  line-height: 65px;
  margin-top: 10px;
  position: relative;
}

.cursor {
  display: inline-block;
  opacity: 1;
  transition: opacity 0.3s;
}

.cursor.active {
  opacity: 1;
}

.cursor:not(.active) {
  opacity: 0;
}

.home__subtitle {
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
}

.home__btn {
  width: 150px;
  height: 40px;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  background-color: #1abc9c;
  margin-top: 50px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.home__btn:hover {
  background-color: #16a085;
}

/* ADAPTIVE STYLES */
@media (max-width: 768px) {
  .home__title {
    font-size: 45px;
    line-height: 45px;
    width: 100%;
  }
  .home__subtitle {
    font-size: 16px;
    text-align: center;
    width: 100%;
  }
  .home__row {
    align-items: center;
  }
}

@media (max-width: 480px) {
  .home__title {
    font-size: 30px;
    line-height: 35px;
  }
  .home__subtitle {
    font-size: 14px;
  }
}
</style>
