<template>
    <div class="column is-half is-offset-one-quarter">
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
            }
        };
    },
    methods: {
       async handleLogin() {
           this.loading = 'is-loading'
           await this.$store.dispatch('auth/login', this.formData)
                .then(() => this.$router.push({ name: 'home'}))
           this.loading = ''

        }
    }
}
</script>
