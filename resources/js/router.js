import Vue from 'vue'
import VueRouter  from 'vue-router'


Vue.use(VueRouter)

import example from './components/ExampleComponent.vue'
import login from './components/login.vue'

const routes = [
    {
        path: '/example',
        component: example
    },
    {
        path: '/login',
        component: login
    }
]

export default new VueRouter({ mode: 'history', routes: routes})