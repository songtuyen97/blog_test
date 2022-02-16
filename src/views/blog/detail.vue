<template>
  <div>
    <SubHeader class="mb-5"/>
    <LoadingInnerPage v-if="loading" />
    <section v-else class="container">
      <h1>{{ blogDetail.title }}</h1>
      <div class="pt-4">
        <p>{{ blogDetail.description }}</p>
        <p>{{ blogDetail.content }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SubHeader from '@/components/blog/detail/SubHeader.vue'
import LoadingInnerPage from '@/components/entries/LoadingInnerPage.vue'

export default {
  components: {
    SubHeader,
    LoadingInnerPage
  },
  computed: {
    ...mapGetters('blog', ['blogDetail', 'loading'])
  },
  methods: {
    ...mapActions('blog', ['fetchBlogDetail']),

    async onFetchBlogDetail () {
      await this.fetchBlogDetail({ id: this.$route.params.id })
    }
  },
  created () {
    this.onFetchBlogDetail()
  }
}
</script>

<style>

</style>
