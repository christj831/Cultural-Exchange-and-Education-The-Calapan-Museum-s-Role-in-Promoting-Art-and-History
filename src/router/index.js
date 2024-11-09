import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';  // Make sure you import the Login component
import Homepage from '../views/Homepage.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  // },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',  // Define the login route
    name: 'login',
    component: Login,  // Ensure you have a Login.vue component
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: Homepage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        next('/login'); // Redirect to login if no token found
      } else {
        next();
      }
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
