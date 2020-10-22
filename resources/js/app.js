/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import router from "./router";
import store from './store'

require('./bootstrap');
window.Vue = require('vue');


Vue.component('nav-bar', require('./components/navbar').default);


store.dispatch('auth/attempt').then(() => {
    const app = new Vue({
        el: '#app',
        router,
        store
    });
})
