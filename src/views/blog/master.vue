<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('blog', ['fetchBlogs'])
  },
  created () {
    this.fetchBlogs()
  }
}
</script>
