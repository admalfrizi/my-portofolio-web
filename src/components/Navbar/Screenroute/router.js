import { createRouter, createMemoryHistory } from 'vue-router';
import Home from '../../Screen/Home.vue';
import Portofolio from '../../Screen/Portofolio.vue'
import AboutMe from '../../Screen/AboutMe.vue';
import Certificate from '../../Screen/Certificate.vue';

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
        path: '/certificate',   
        name: 'Certificate',
        component: Certificate,
        meta: {
            title: 'Certificate',
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
    history: createMemoryHistory(),
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
