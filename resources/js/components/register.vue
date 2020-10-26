<template>
    <div class="column is-half is-offset-one-quarter">
        <div v-if="errors.length" class="notification is-danger is-light">
            <button class="delete" @click="errors = []"></button>
            <p v-for="error of errors"> {{ error }}</p>
        </div>

        <form @submit.prevent="register">
            <h3>registration</h3>
            <div class="field">
                <input
                    class="input"
                    type="text"
                    placeholder="Name"
                    v-model="formData.name"
                />
            </div>
            <div class="field">
                <input
                    class="input"
                    type="email"
                    placeholder="Email"
                    v-model="formData.email"
                />
            </div>
            <div class="field">
                <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    v-model="formData.password"
                />
            </div>
            <div class="field">
                <input class="input" type="password" placeholder="password_confirmation"
                       v-model="formData.password_confirmation">
            </div>

            <div class="select field">
                <select v-model="formData.timezone">
                    <option v-for="time in timeZoneList" :value="time">{{ time }}</option>

                </select>
            </div>

            <div class="field">
                <button class="button is-warning" :class="loading" type="submit">register</button>
            </div>
        </form>
    </div>

</template>

<script>
import momentTz from 'moment-timezone'

export default {
    data() {
        return {
            formData: {
                name: '',
                email: '',
                timezone: '',
                password: '',
                password_confirmation: ''
            },
            loading: '',
            timeZoneList: momentTz.tz.names(),
            errors: [],
        }
    },
    methods: {
        async register() {
            this.loading = 'is-loading'
            await axios.post('/register', this.formData)
                .then(r => {
                    window.location.href = 'http://127.0.0.1:8000'
                })
                .catch(err => {
                    for (const [k, v] of Object.entries(err.response.data.errors)) {
                        this.errors.push(v[0])
                    }
                })
            this.loading = ''
        }
    }

}
</script>
