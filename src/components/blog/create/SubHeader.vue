<template>
  <div class="bg-info">
    <div class="container">
      <b-row no-gutters align-v="center" align-h="start" class="h-100px">
        <router-link :to="{ name: BLOG_INDEX }" class="text-dark text-decoration-none">
          <b class="text-uppercase">Blogs</b>
        </router-link>
      </b-row>
    </div>
  </div>
</template>

<script>
import {
  BLOG_CREATE,
  BLOG_INDEX
} from '@/configs/routesName'

export default {
  props: {
    isEditMode: {
      type: Boolean,
      default: false
    },
    isCreationMode: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      BLOG_CREATE,
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
