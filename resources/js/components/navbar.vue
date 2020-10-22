<template>
    <nav class="navbar" role="navigation" aria-label="main navigation" style="border-bottom: 1px #ececf6 solid">
        <div class="navbar-brand primary">
            <router-link class="navbar-item" to="/">
                Home
            </router-link>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <template v-if="!$store.state.auth.isLoggedIn">
                            <a class="button is-light">
                                <router-link tag="span" to="/login"> login</router-link>
                            </a>
                            <a class="button is-light">
                                <router-link tag="span" to="/register"> register</router-link>
                            </a>
                        </template>
                        <template v-else>
                            <a class="navbar-item">
                                {{ $store.state.auth.user.name}}
                            </a>
                            <a class="button is-light" @click="logout">
                                <span> logout</span>
                            </a>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    methods: {
        logout() {
            this.$store.dispatch('auth/signOut')
                .then(() => this.$router.push('/login'))
        }
    }
}
</script>
