<template>
    <div class="columns mt-5">
        <div v-if="expert " class="column">
            <div>
                <p class="has-text-centered">
                    <img src="../../../public/icon/user.png" width="150">
                </p>
                <h3 class="has-text-centered">{{ expert.name }}</h3>
                <p class="has-text-centered">{{ expert.expert }}</p>
                <br />

                <p class="has-text-centered">country:  {{ expert.country }}</p>
                <p class="has-text-centered">working hours:  {{ expert.working_hours_from }} -> {{ expert.working_hours_to}}</p>
                <br />

                <p class="has-text-centered">
                    <button class="button" @click="getExpert(expert)">book now</button>
                </p>
            </div>

        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
 export default {
    computed: {
        ...mapGetters({ expert: 'expert/expert'})
    }

 }
</script>
