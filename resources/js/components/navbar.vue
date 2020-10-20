<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                Technical Test
            </router-link>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
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
                        <a class="button is-light">
                            <router-link tag="span" to="/login"> login</router-link>
                        </a>
                        <a class="button is-light">
                            <router-link tag="span" to="/register"> register</router-link>
                        </a>
                        <a class="button is-light" @click="logout">
                            <span> logout</span>
                        </a>
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
             axios.post('/logout').then(r => console.log(r)).catch(err => console.log(err))
         }
     }
 }
</script>
