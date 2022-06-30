<template>
  <div>
    <h3>children</h3>
    <p>username: {{ username }}</p>
    <p>password: {{ password }}</p>
    <router-link to="/home">to home</router-link>
  </div>
</template>

<script>
import store from '../../store'

export default {
  name: 'Children',
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
