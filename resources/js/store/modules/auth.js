const state = {
    isLoggedIn: false,
    user: null
}
const getters = {
    isLoggedIn: state => state.isLoggedIn,
    user: state => state.user

}
const mutations = {
    SET_USER: (state, user) => state.user = user,
    SET_LOGIN: (state, status) => state.isLoggedIn = status
}
const actions = {
    async login({dispatch}, data) {
        await axios.get('/sanctum/csrf-cookie');
        await axios.post("/login", data)
        dispatch('attempt');
    },

    async attempt({commit, state}) {

        if (state.isLoggedIn) {
            return
        }


        try {
            const response = await axios.get('/api/user')
            commit('SET_USER', response.data)
            commit('SET_LOGIN', true)

        } catch (e) {
            commit('SET_TOKEN', null)
            commit('SET_LOGIN', false)

        }
    },

    async signOut({commit}) {
        commit('SET_LOGIN', false)
        commit('SET_USER', null)
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

