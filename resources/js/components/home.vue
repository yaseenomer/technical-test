<template>
    <div>
        home page
        <a href="#" @click="getUser"> get user</a>
    </div>

</template>
<script>
  export default {
      methods: {
          getUser() {
              axios.get('/api/user').then(res => console.log(res))
          }
      }

  }
</script>
