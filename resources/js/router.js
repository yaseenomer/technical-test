import Vue from 'vue'
import VueRouter  from 'vue-router'


Vue.use(VueRouter)

import home from './components/home'
import login from './components/login.vue'
import register from "./components/register";


const routes = [
    {
        path: '/',
        component:home,

    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/register',
        component: register
    }
]

export default new VueRouter({ mode: 'history', routes: routes})
