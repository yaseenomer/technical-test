<template>
    <div class="column is-half is-offset-one-quarter">
        <p>book Appointment</p>
        <br/>
        <div class="field">
            <input type="date" class="input" v-model="book.date">
        </div>

        <div class="control field">
            <label class="label">Duration</label>
            <div class="select">
                <select @change="getTimeSlots($event.target.value)">
                    <option value="15"> 15 min</option>
                    <option value="30"> 30 min</option>
                    <option value="60"> 1 hour</option>
                </select>
            </div>
        </div>
        <div class="control field">
            <label class="label">Time Slots</label>
            <div class="select">
                <select v-model="book.book_id">
                    <template v-for="slot in slots">
                        <option :value="slot.id" :key="slot.id">
                            {{ `${slot.from} -> ${slot.to}` }}
                        </option>
                    </template>
                </select>
            </div>
        </div>

        <p v-if="book.date"><span class="has-text-weight-bold">your appointment will be on :</span>
            <span> {{ book.date }} </span>
        </p>
        <div>
            <p>Booked times : </p>
            <p v-for="taken in expert.approved_books" style="color: lightcoral">
                at : {{ taken.date }} from : {{ taken.book.from }} to : {{ taken.book.to }}
            </p>
        </div>

        <button class="button is-warning" :class="loading" @click="save"> approve</button>

    </div>

</template>
<script>
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            loading: '',
            book: {
                date: '',
                book_id: '',
            }
        }
    },
    computed: {
        ...mapGetters({expert: 'expert/expert', slots: 'expert/currntTimeSlot'})
    },
    created() {
        this.$store.dispatch('expert/getExpert', this.$route.params.id)
    },

    methods: {
        getTimeSlots(e) {
            this.$store.commit('expert/SET_CURRNT_TIME_SLOT',
                {type: parseInt(e, 10), date: this.book.date})
        },
        async save() {
            this.loading = 'is-loading'
            this.book.expert_id = await this.expert.id
            await this.$store.dispatch('expert/addBook', this.book)
            this.loading = ''
        }
    }

}
</script>
