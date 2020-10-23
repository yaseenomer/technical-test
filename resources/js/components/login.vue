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
                <input class="button" type="submit" value="login"/>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                email: "",
                password: ""
            }
        };
    },

    methods: {
        handleLogin() {
            this.$store.dispatch('auth/login', this.formData)
                .then(() => this.$router.push({ name: 'home'}))

        }
    }
}
</script>
