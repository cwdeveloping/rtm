<template>
  <div class="course-detail" v-if="course">
    <h1>{{ course.title }}</h1>
    <img :src="course.image" alt="" />
    <p><strong>Davomiyligi:</strong> {{ course.duration }}</p>
    <p><strong>Narxi:</strong> {{ course.price }}</p>
    <p><strong>Tavsif:</strong> {{ course.description }}</p>
    <router-link to="/courses">Orqaga</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCourseById']),
  },
  created() {
    const courseId = this.$route.params.id;
    this.course = this.getCourseById(courseId);
  },
  data() {
    return {
      course: null,
    };
  },
};
</script>

<style scoped>
.course-detail {
    
  padding: 20px;
  text-align: center;
}

.course-detail img {
  max-width: 100%;
  height: auto;
}
</style>
