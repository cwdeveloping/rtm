<template>
  <div class="counter" id="about">
    <h1>Biz haqimizda raqamlarda</h1>
    <div class="counter__row">
      <div class="counter__card" ref="pupilCount">
        <img src="../assets/images/counter/pupil.png" alt="">
        <p class="card__count">0</p>
        <p class="card__title">O'quvchilar soni</p>
      </div>
      <div class="counter__card" ref="gradCount">
        <img src="../assets/images/counter/grad.png" alt="">
        <p class="card__count">0</p>
        <p class="card__title">Bitiruvchilar soni</p>
      </div>
      <div class="counter__card" ref="teacherCount">
        <img src="../assets/images/counter/teacher.png" alt="">
        <p class="card__count">0</p>
        <p class="card__title">O'qituvchilar soni</p>
      </div>
      <div class="counter__card" ref="coursesCount">
        <img src="../assets/images/counter/courses.png" alt="">
        <p class="card__count">0</p>
        <p class="card__title">Kurslar soni</p>
      </div>
    </div>
  </div>
</template>

<script>
import { startCounter } from '../counter.js';

export default {
  data() {
    return {
      hasStartedCounting: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.startCounting();
        }
      });
    });

    observer.observe(this.$el);
  },
  methods: {
    startCounting() {
      if (this.hasStartedCounting) {
        // Agar hisoblagich allaqachon boshlangan bo'lsa, sanashni to'xtatamiz
        this.resetCounts();
      }
      this.hasStartedCounting = true;
      startCounter(this.$refs.pupilCount.querySelector('.card__count'), 200, 2000);
      startCounter(this.$refs.gradCount.querySelector('.card__count'), 60, 2000);
      startCounter(this.$refs.teacherCount.querySelector('.card__count'), 30, 2000);
      startCounter(this.$refs.coursesCount.querySelector('.card__count'), 20, 2000);
    },
    resetCounts() {
      // Hisoblagichlarni 0 ga qaytaramiz
      this.$refs.pupilCount.querySelector('.card__count').textContent = 0;
      this.$refs.gradCount.querySelector('.card__count').textContent = 0;
      this.$refs.teacherCount.querySelector('.card__count').textContent = 0;
      this.$refs.coursesCount.querySelector('.card__count').textContent = 0;
      this.hasStartedCounting = false; // Yangilanishni qayta boshlaymiz
    }
  }
};
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
}

h1 {
  font-size: xx-large;
  text-align: left;
  width: 88%;
  margin-bottom: 30px;
  color: #2c3e50;
}

.counter__row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 88%;
}

.counter__card {
  background-color: #fcf8f8;
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  cursor: pointer;
  flex: 1;
  padding-top: 20px;
  height: 220px;
  width: 300px;
  min-width: 300px;
  transition: all .35s;
}

.counter__card:hover {
    box-shadow: 0 0px 15px rgba(0, 0, 0, 0.2);
}

.counter__card img {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
}

.card__count {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 5px;
}

.card__title {
  font-size: 1.2rem;
  color: #2c3e50;
}

</style>