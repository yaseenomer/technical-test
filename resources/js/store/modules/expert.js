import expert from "../../components/expert";

const state = {
    experts: [],
    expert: null,
    currntTimeSlot: []
}

const getters = {
    experts: state => state.experts,
    expert: state => state.expert,
    currntTimeSlot: state => state.currntTimeSlot
}

const mutations = {
    SET_EXPERTS: (state, experts) => state.experts = experts,
    SET_EXPERT: (state, expert) => state.expert = expert,
    SET_CURRNT_TIME_SLOT: (state, type, date) => {
        state.currntTimeSlot = _.filter(state.expert.books,
            (book) => {
                book.type === type &&

                _.filter(expert.approved_books,
                    (appro) => {

                    }
                )
            }
        )
    }
}

const actions = {
    async getExperts({commit}) {
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

