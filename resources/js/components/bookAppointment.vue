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
                <select  @change="getTimeSlots($event.target.value)">
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

        <button @click="save"> approve </button>

    </div>

</template>
<script>
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            book: {
                date: '',
                book_id: '',
            }
        }
    },
    computed: {
        ...mapGetters({expert: 'expert/expert', slots: 'expert/currntTimeSlot'})
    },

    methods: {
        getTimeSlots(e) {
            this.$store.commit('expert/SET_CURRNT_TIME_SLOT', parseInt(e, 10))
        },
        save() {
            this.book.expert_id = this.expert.id
            axios.post('/api/books', this.book).then(r => console.log(r))
        }
    }

}
</script>
