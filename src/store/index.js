// src/store.js
import { createStore } from 'vuex';

import aktImg from '../assets/images/akt.svg';
import foundationImg from '../assets/images/found.svg';
import robotImg from '../assets/images/ROBOT.svg';
import graphicImg from '../assets/images/GIRAFIK.svg';
import modelingImg from '../assets/images/GIRAFIK.svg';
import uxuiImg from '../assets/images/uxui.svg';
import motionImg from '../assets/images/MOTIN.svg';
import frontendImg from '../assets/images/FRONTEND.svg';
import pythonImg from '../assets/images/PHYTON.svg';
import flutterImg from '../assets/images/FLUT.svg';
import englishImg from '../assets/images/INGLIZ TILI.svg';
import russianImg from '../assets/images/RUS.svg';


const store = createStore({
  state: {
    selectedCategory: 'all',
    courses: [
      {
        id: 1,
        title: 'AKT',
        duration: '3 oy',
        price: '250 000 UZS',
        image: aktImg,
        category: 'Savodhonlik',
        description: 'AKT kursi raqamli texnologiyalar va kompyuter dasturlash asoslarini o\'rganish uchun mo\'ljallangan.',
      },
      {
        id: 2,
        title: 'Foundation (C++)',
        duration: '3 oy',
        price: '400 000 UZS',
        image: foundationImg,
        category: 'Savodhonlik',
        description: 'C++ dasturlash tilining asoslarini o\'rganish uchun kurs. O\'quvchilar ob\'ektga yo\'naltirilgan dasturlashni o\'rganadilar.',
      },
      {
        id: 3,
        title: 'Robototexnika',
        duration: '5 oy',
        price: '500 000 UZS',
        image: robotImg,
        category: 'Programming',
        description: 'Robototexnika kursi o\'quvchilarga robotlar yaratish va dasturlash asoslarini o\'rgatadi.',
      },
      {
        id: 4,
        title: 'Grafik dizayn',
        duration: '6 oy',
        price: '750 000 UZS',
        image: graphicImg,
        category: 'Design',
        description: 'Grafik dizayn kursi o\'quvchilarga vizual kommunikatsiya va dizayn asoslarini o\'rganishga yordam beradi.',
      },
      {
        id: 5,
        title: '3D Modeling',
        duration: '3 oy',
        price: '750 000 UZS',
        image: modelingImg,
        category: 'Design',
        description: '3D modeling kursi o\'quvchilarga 3D modellar yaratish va animatsiya qilishni o\'rgatadi.',
      },
      {
        id: 6,
        title: 'UX/UI',
        duration: '5 oy',
        price: '750 000 UZS',
        image: uxuiImg,
        category: 'Design',
        description: 'UX/UI dizayn kursi o\'quvchilarga foydalanuvchi tajribasini yaxshilash va interfeyslarni yaratishni o\'rgatadi.',
      },
      {
        id: 7,
        title: 'Motion dizayn',
        duration: '5 oy',
        price: '750 000 UZS',
        image: motionImg,
        category: 'Design',
        description: 'Motion dizayn kursi o\'quvchilarga harakatli grafikalar va videolar yaratishni o\'rgatadi.',
      },
      {
        id: 8,
        title: 'Frontend',
        duration: '9 oy',
        price: '590 000 UZS',
        image: frontendImg,
        category: 'Programming',
        description: 'Frontend dasturlash kursi o\'quvchilarga veb-saytlarni yaratish va ularni optimallashtirishni o\'rgatadi.',
      },
      {
        id: 9,
        title: 'Python',
        duration: '6 oy',
        price: '590 000 UZS',
        image: pythonImg,
        category: 'Programming',
        description: 'Python dasturlash tili kursi o\'quvchilarga dasturlash asoslari va Python tilining imkoniyatlarini o\'rgatadi.',
      },
      {
        id: 10,
        title: 'Flutter',
        duration: '6 oy',
        price: '590 000 UZS',
        image: flutterImg,
        category: 'Programming',
        description: 'Flutter kursi mobil ilovalar yaratish uchun zamonaviy dasturlash texnologiyalarini o\'rganishga yordam beradi.',
      },
      {
        id: 11,
        title: 'Ingliz tili',
        duration: '6 oy',
        price: '250 000 UZS',
        image: englishImg,
        category: 'Lang',
        description: 'Ingliz tili kursi o\'quvchilarga ingliz tilida muloqot qilish va yozish qobiliyatlarini rivojlantirishga yordam beradi.',
      },
      {
        id: 12,
        title: 'Rus tili',
        duration: '6 oy',
        price: '250 000 UZS',
        image: russianImg,
        category: 'Lang',
        description: 'Rus tili kursi o\'quvchilarga rus tilini o\'rganishga va amaliy muloqotda foydalanishga yordam beradi.',
      },
    ],
  },
  getters: {
    getCourses: (state) => {
      if (state.selectedCategory === 'all') {
        return state.courses;
      }
      return state.courses.filter(course => course.category === state.selectedCategory);
    },
    getCourseById: (state) => (id) => state.courses.find(course => course.id === id),
  },
  mutations: {
    setCategory(state, category) {
      state.selectedCategory = category;
    },
  },
});

export default store;
