<template>
  <div class="bg-info">
    <div class="container">
      <b-row no-gutters align-v="center" align-h="between" class="h-100px">
        <router-link :to="{ name: BLOG_INDEX }" class="text-dark text-decoration-none">
          <b class="text-uppercase">Blogs</b>
        </router-link>
        <router-link :to="{ name: BLOG_EDIT, params: { id: $route.params.id } }">
          <b-button variant="outline-warning">
            <b-icon-pencil variant="warning"></b-icon-pencil>
          </b-button>
        </router-link>
      </b-row>
    </div>
  </div>
</template>

<script>
import {
  BLOG_EDIT,
  BLOG_INDEX
} from '@/configs/routesName'

export default {
  data () {
    return {
      BLOG_EDIT,
      BLOG_INDEX
    }
  }
}
</script>

<style scoped>
  .h-100px {
    height: 80px
  }
</style>
