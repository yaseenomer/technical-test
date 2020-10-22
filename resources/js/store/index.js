import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth";
import expert from "./modules/expert";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        expert
    },
     strict: false
})


