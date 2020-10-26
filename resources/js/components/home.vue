<template>
    <div>
        <div class="columns mt-5">
            <div class="column" v-for="expert in experts">
                <div>
                    <p class="has-text-centered">
                        <img src="../../../public/icon/user.png" width="100">
                    </p>
                    <p class="has-text-centered">{{ expert.name }}</p>
                    <p class="has-text-centered">{{ expert.expert }}</p>
                    <p class="has-text-centered">
                        <button class="button" @click="getExpert(expert.id)">More Info</button>
                    </p>
                </div>

            </div>
        </div>

    </div>

</template>
<script>
import momentTz from 'moment-timezone'
import moment from 'moment'
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            momentTz,
            moment,

        }
    },
    computed: {
        ...mapGetters({user: 'auth/user', experts: 'expert/experts'})
    },
    created() {
        this.$store.dispatch('expert/getExperts')
    },
    methods: {
        getExpert(id) {
            this.$router.push({name: 'expert', params: {id}})
        }
    }

}
</script>
