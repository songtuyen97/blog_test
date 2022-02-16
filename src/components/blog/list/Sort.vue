<template>
  <b-row no-gutters align-h="end" align-v="center">
    <b class="mr-2">Sort By</b>
    <b-col cols="4" md="2" class="mr-2">
      <b-form-select
        :value="blogsParams.sortBy"
        :options="options"
        @change="onChangeSortBy"
      ></b-form-select>
    </b-col>
    <b-button
      @click="onChangeOrder(ORDER_ASC)"
      :variant="isEnableASC ? '' : 'outline'"
      class="mr-2"
    >ASC</b-button>
    <b-button
      @click="onChangeOrder(ORDER_DESC)"
      :variant="isEnableDESC ? '' : 'outline'"
    >DESC</b-button>
  </b-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

const ORDER_DESC = 'desc'
const ORDER_ASC = 'asc'

export default {
  computed: {
    ...mapGetters('blog', ['blogsParams']),

    isEnableDESC () {
      return this.blogsParams.order === this.ORDER_DESC
    },
    isEnableASC () {
      return this.blogsParams.order === this.ORDER_ASC
    }
  },
  methods: {
    ...mapActions('blog', ['fetchBlogs']),

    onChangeSortBy (value) {
      this.blogsParams.sortBy = value
      this.onFetchBlogs()
    },
    onChangeOrder (order) {
      this.blogsParams.order = order
      this.onFetchBlogs()
    },
    onFetchBlogs () {
      this.blogsParams.p = 1
      this.fetchBlogs()
    }
  },
  data () {
    return {
      ORDER_DESC,
      ORDER_ASC,
      selected: 'createdAt',
      options: [
        { value: 'createdAt', text: 'Created At' },
        { value: 'title', text: 'Title' }
      ]
    }
  }
}
</script>

<style>

</style>
