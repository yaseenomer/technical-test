<template>
    <div class="column is-half is-offset-one-quarter">
        <div v-if="errors.length" class="notification is-danger is-light">
            <button class="delete" @click="errors = []"></button>
            <p v-for="error of errors"> {{ error }}</p>
        </div>
        <form @submit.prevent="handleLogin">
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
                <button class="button is-warning" type="submit" :class="loading">login</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: '',
            formData: {
                email: "",
                password: ""
            },
            errors: [],
        };
    },
    methods: {
       async handleLogin() {
           this.loading = 'is-loading'
           await this.$store.dispatch('auth/login', this.formData)
                .then(() => this.$router.push({ name: 'home'}))
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
