<template>
  <div>
    <h3>home</h3>
    <p>username: {{ username }}</p>
    <p>password: {{ password }}</p>
    <router-link to="/children">to children</router-link>
  </div>
</template>

<script>
import store from '../../store'

export default {
  name: 'Home',
  computed: {
    username: function () {
      return store.info.username
    },
    password: function () {
      return store.info.password
    },
  },
}
</script>
