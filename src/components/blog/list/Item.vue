<template>
  <b-row no-gutters align-h="between">
    <b-media tag="li" class="mb-4 w-75">
      <template #aside>
        <router-link :to="{ name: BLOG_DETAIL, params: { id: blog.id } }">
          <b-img width="64" alt="placeholder" :src="blog.image"></b-img>
        </router-link>
      </template>
      <router-link :to="{ name: BLOG_DETAIL, params: { id: blog.id } }">
        <h5 class="mt-0 mb-1 font-weight-bold">{{ blog.title }}</h5>
      </router-link>
      <p class="mb-0">
        {{ blog.description }}
      </p>
      <p class="mb-0 text-muted">
        Created: {{ blog.createdAt | date }}
      </p>
    </b-media>
    <div class="w-25 text-right">
      <router-link :to="{ name: BLOG_EDIT, params: { id: blog.id } }">
        <b-button variant="outline-secondary">
          <b-icon-pencil></b-icon-pencil>
        </b-button>
      </router-link>
    </div>
  </b-row>
</template>

<script>
import {
  BLOG_DETAIL,
  BLOG_EDIT
} from '@/configs/routesName'

export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      BLOG_DETAIL,
      BLOG_EDIT
    }
  }
}
</script>
