import Vue from 'vue'
import VueRouter  from 'vue-router'
import store from './store'


Vue.use(VueRouter)

import home from './components/home'
import login from './components/login.vue'
import register from "./components/register";
import expert from "./components/expert";
import bookAppointment from "./components/bookAppointment";


const routes  = [
    {
        path: '/',
        name: 'home',
        component:home,
        beforeEnter: (to, from, next) => {
            if (!store.state.auth.isLoggedIn) next({ name: 'login'})
            else next()
        }
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/register',
        component: register
    },
    {
        path: '/expert',
        name: 'expert',
        component: expert
    },
    {
        path: '/book-appointment',
        name: 'book-appointment',
        component: bookAppointment
    }
]

export default new VueRouter({ mode: 'history', routes: routes})
