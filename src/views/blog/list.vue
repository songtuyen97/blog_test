<template>
  <div>
    <!-- Start sub header -->
    <SubHeader class="mb-5"/>
    <!-- End sub header -->
    <LoadingInnerPage v-if="loading" />
    <div v-else class="container">
      <Sort class="mb-5"/>
      <ul class="list-unstyled">
        <Item v-for="blog in blogs" :key="blog.id" :blog="blog" />
      </ul>
      <div v-if="isShowPagination">
        <b-pagination
          :value="blogsParams.p"
          :total-rows="pagination.total"
          :per-page="blogsParams.l"
          @change="onChangePage"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Item from '@/components/blog/list/Item.vue'
import SubHeader from '@/components/blog/list/SubHeader.vue'
import Sort from '@/components/blog/list/Sort.vue'
import LoadingInnerPage from '@/components/entries/LoadingInnerPage.vue'

export default {
  components: {
    Item,
    SubHeader,
    Sort,
    LoadingInnerPage
  },
  computed: {
    ...mapGetters('blog', ['blogs', 'pagination', 'loading', 'blogsParams']),

    isShowPagination () {
      // the mock API dont response the pagination. => hide pagination when search
      return !this.blogsParams.search
    }
  },
  methods: {
    ...mapActions('blog', ['fetchBlogs']),

    onFetchBlogs (params = {}) {
      this.fetchBlogs(params)
    },
    onChangePage (p = 1) {
      this.blogsParams.p = p

      this.onFetchBlogs()
    }
  }
}
</script>
