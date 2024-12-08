import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import TourPage from './pages/TourPage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    mode: 'hash',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/tours', component: ()=> import('./pages/ToursPage.vue'), name: 'tours' },
        { path: '/about', component: ()=> import('./pages/AboutPage.vue'), name: 'about' },
        { path: '/need-to-know', component: ()=> import('./pages/ImportantPage.vue'), name: 'need-to-know' },
        { path: '/contacts', component: ()=> import('./pages/ContactsPage.vue'), name: 'contacts' },

        {
            path: '/tours/:id', component: TourPage, name: 'tour'
        }
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
        }
      },
})


export default router;