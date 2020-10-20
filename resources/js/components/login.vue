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
                <div class="field">
                <input class="button" type="submit" value="login" />
                </div>
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
            axios.get("/sanctum/csrf-cookie").then(r => {
                axios
                    .post("/login", this.formData)
                    .then(res => console.log(res));
            });
        },
        user() {
            axios.get('/api/user')
            .then(user => console.log(user))
            .catch(err => console.log(err))
        }

    }
};
</script>
