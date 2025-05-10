import { createRouter, createWebHistory } from 'vue-router';
import Home from '../../Screen/Home.vue';
import Portofolio from '../../Screen/Portofolio.vue'
import AboutMe from '../../Screen/AboutMe.vue';

const routes = [
    {
        path: '/home',
        alias: '/',
        component: Home,
        meta: {
            title: 'Home',
        }
    },
    {
        path: '/portofolio',
        name: 'Portofolio',
        component: Portofolio,
        meta: {
            title: 'Portofolio',
        }
    },
    {
        path: '/aboutme',
        name: 'About Me',
        component: AboutMe,
        meta: {
            title: 'About Me',
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({
            behavior: 'smooth'
        });
    }
})

router.beforeEach((to, from, next) => {
    const title = to.meta.title || 'Default Title';
    document.title = `${title} | Adam Alfarizi Web`;
    
    next();
})


export default router
