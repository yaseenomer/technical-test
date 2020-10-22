const state = {
    experts: [],
    expert: null
}

const getters = {
    experts: state => state.experts,
    expert: state => state.expert,
}

const mutations = {
    SET_EXPERTS: (state, experts) => state.experts = experts,
    SET_EXPERT: (state, expert) => state.expert = expert
}

const actions = {
    async getExperts({ commit }) {
        const experts = await axios.get('/api/experts')
        commit('SET_EXPERTS', experts.data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

