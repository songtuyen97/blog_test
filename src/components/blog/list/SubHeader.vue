<template>
  <div class="bg-info">
    <div class="container">
      <b-row no-gutters align-v="center" align-h="between" class="h-100px">
        <b-col cols="6" sm="10" md="6">
          <b-form-input
            v-model="blogsParams.search"
            placeholder="Search"
          ></b-form-input>
        </b-col>
        <router-link :to="{ name: BLOG_CREATE }">
          <b-button variant="success" class="border">
            New Blog
          </b-button>
        </router-link>
      </b-row>
    </div>
  </div>
</template>

<script>
import { BLOG_CREATE } from '@/configs/routesName'
import _debounce from 'lodash/debounce'
import { mapActions, mapGetters } from 'vuex'

export default {
  watch: {
    'blogsParams.search': _debounce(function (value) {
      this.blogsParams.p = 1
      this.fetchBlogs()
    }, 500)
  },
  computed: {
    ...mapGetters('blog', ['blogsParams'])
  },
  methods: {
    ...mapActions('blog', ['fetchBlogs'])
  },
  data () {
    return {
      BLOG_CREATE
    }
  }
}
</script>

<style scoped>
  .h-100px {
    height: 80px
  }
</style>
