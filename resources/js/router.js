import Vue from 'vue'
import VueRouter  from 'vue-router'
import store from './store'


Vue.use(VueRouter)

import home from './components/home'
import login from './components/login.vue'
import register from "./components/register";
import expert from "./components/expert";


const routes  = [
    {
        path: '/',
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
    }
]

export default new VueRouter({ mode: 'history', routes: routes})
