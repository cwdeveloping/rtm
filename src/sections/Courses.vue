<template>
  <div class="courses">
    <h1 class="courses__title">Kurslarimiz</h1>

    <div class="category__buttons">
      <button @click="setCategory('all')" :class="{ active: selectedCategory === 'all' }">Barchasi</button>
      <button @click="setCategory('Programming')" :class="{ active: selectedCategory === 'Programming' }">Dasturlash</button>
      <button @click="setCategory('Design')" :class="{ active: selectedCategory === 'Design' }">Dizayn</button>
      <button @click="setCategory('Savodhonlik')" :class="{ active: selectedCategory === 'Savodhonlik' }">Boshlang'ich</button>
      <button @click="setCategory('Lang')" :class="{ active: selectedCategory === 'Lang' }">Chet tillari</button>
    </div>

    <transition-group name="fade" tag="div" class="courses__row" appear>
      <div v-for="(course, index) in filteredCourses" :key="course.id" 
           class="course__card" 
           @click="goToCourse(course.id)"
           :style="{ transitionDelay: `${index * 0.1}s` }">
        <img :src="course.image" alt="" />
        <div class="card__badge duration">{{ course.duration }}</div>
        <div class="card__badge price" @click.stop="openModal(course.title)">Kursga yozilish</div>
      </div>
    </transition-group>

    <Modal :courseName="courseName" :isOpen="isModalOpen" @close="closeModal" />
  </div>
</template>



<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { computed, ref } from 'vue';
import Modal from '../components/Modal.vue';

export default {
  components: {
    Modal,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const courses = computed(() => store.getters.getCourses);
    const selectedCategory = computed(() => store.state.selectedCategory);
    const isModalOpen = ref(false);
    const courseName = ref('');

    const goToCourse = (id) => {
      router.push({ name: 'CourseDetail', params: { id } });
    };

    const setCategory = (category) => {
      store.commit('setCategory', category);
      console.log(category);
    };

    const openModal = (title) => {
      isModalOpen.value = true;
      courseName.value = title;
      console.log(title);
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };

    const filteredCourses = computed(() => {
      if (selectedCategory.value === 'all') return courses.value;
      return courses.value.filter(course => course.category === selectedCategory.value);
    });

    return { courses, courseName, goToCourse, setCategory, selectedCategory, openModal, closeModal, isModalOpen, filteredCourses };
  },
};
</script>



<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-100px)
}

.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.courses {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  margin-top: 0px !important;
  background-color: #f3f6f9;
}

.courses__row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  width: 82%;
}

.courses__title {
  width: 82%;
  text-align: left;
  font-size: 2.8rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
}

.course__card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 15px;
  padding: 25px;
  text-align: center;
  margin-bottom: 30px;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
}

.course__card:hover {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.course__card:hover img {
  transform: scale(1.1);
}

.course__card img {
  width: 100%;
  height: 160px;
  object-fit: contain;
  border-radius: 10px;
  transition: all 0.3s;
  margin-bottom: 20px;
}

.card__title {
  font-size: 1.7rem;
  font-weight: bold;
  color: #34495e;
  margin-bottom: 15px;
}

.card__badge {
  display: inline-block;
  color: #089124;
  padding: 7px 15px;
  border-radius: 25px;
  font-size: 0.95rem;
  border: 2px solid;
  margin-top: 15px;
  transition: all .3s;
}

.card__badge:hover {
  background: #089124;
  color: white;
}

.price {
  margin-left: 15px;
}

.category__buttons {
  width: 82%;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.category__buttons button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: #f3f6f9;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.category__buttons button.active {
  background-color: #089124;
  color: white;
}

.category__buttons button:hover {
  background-color: #2b9f42;
  color: white;
}

@media screen and (max-width: 768px) {
  .courses__row {
    grid-template-columns: 1fr;
  }

  .course__card {
    width: 100%;
  }

  .courses__title {
    font-size: 2.2rem;
  }

  .category__buttons button {
    padding: 5px 10px !important;
  }
}

@media screen and (max-width: 600px) {
  .category__buttons{
    display: none;
  }
}
</style>



