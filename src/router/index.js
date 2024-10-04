import { createRouter, createWebHistory } from 'vue-router';
import Courses from '../sections/Courses.vue';
import CourseDetail from '../components/CourseDetail.vue';

const routes = [
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
  },
  {
    path: '/courses/:id',
    name: 'CourseDetail',
    component: CourseDetail
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
