<template>
    <div class="column is-half is-offset-one-quarter">
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
                    <option v-for="time in timeZoneList" :value="time" >{{ time }}</option>

                </select>
            </div>

            <div class="field">
                <input class="button" type="submit" value="register"/>
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
            timeZoneList: momentTz.tz.names()
        }
    },
    methods: {
        register() {
            axios.post('/register', this.formData)
                .then(r => console.log(r))
                .catch(err => console.log(err))
        }
    }

}
</script>
