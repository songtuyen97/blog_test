<template>
  <div>
    <!-- Start sub header -->
    <SubHeader :isEditMode="isEditMode" :isCreationMode="isCreationMode" class="mb-5"/>
    <!-- End sub header -->
    <LoadingInnerPage v-if="loading" />
    <div v-else class="container">
      <b-form @submit.stop.prevent="onSubmit">
        <LabelInputText
          id="title"
          name="title"
          v-model="blogInfo.title"
          label="Title (*)"
          class="mb-4"
          :rules="{ required: true, max: 255 }"
        />
        <LabelTextArea
          id="description"
          name="description"
          v-model="blogInfo.description"
          label="Description (*)"
          class="mb-4"
          :rules="{ required: true, max: 255 }"
        />
        <LabelTextArea
          id="content"
          name="content"
          v-model="blogInfo.content"
          label="Content (*)"
          rows="10"
          :rules="{ required: true }"
        />
        <b-row no-gutters align-h="end" class="mt-5">
          <router-link :to="{ name: BLOG_LIST }">
            <b-button
              class="mr-2"
              :disabled="loadingSubmitted"
            >Cancel</b-button>
          </router-link>
          <b-button
            type="submit"
            variant="success"
            :disabled="loadingSubmitted"
          >Submit</b-button>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import * as blogService from '@/services/blog'
import { makeClone, handleErrorResponse } from '@/configs/methods'
import { BLOG_LIST } from '@/configs/routesName'
import SubHeader from '@/components/blog/create/SubHeader.vue'
import LabelInputText from '@/components/entries/LabelInputText.vue'
import LabelTextArea from '@/components/entries/LabelTextArea.vue'
import LoadingInnerPage from '@/components/entries/LoadingInnerPage.vue'

export default {
  components: {
    SubHeader,
    LabelInputText,
    LabelTextArea,
    LoadingInnerPage
  },
  computed: {
    ...mapGetters('blog', ['blogDetail', 'loading']),

    /* eslint-disable */
    isEditMode () {
      return Boolean(this.$route.params.id)
    },
    isCreationMode () {
      return !Boolean(this.$route.params.id)
    }
    /* eslint-enable */
  },
  methods: {
    ...mapActions('blog', ['fetchBlogDetail', 'fetchBlogs']),

    onSubmit () {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return
        }

        if (this.isEditMode) {
          this.onSubmitForEdit()
        } else if (this.isCreationMode) {
          this.onSubmitForCreation()
        }
      })
    },
    async onSubmitForCreation () {
      try {
        this.loadingSubmitted = true

        let blogInfoClone = makeClone(this.blogInfo)

        const { data: { _message } } = await blogService.createBlog(blogInfoClone)

        this.$bvToast.toast(_message, { variant: 'success', solid: true })

        this.fetchBlogs()
        this.$router.push({ name: BLOG_LIST })
      } catch ({ response }) {
        handleErrorResponse(response)
      } finally {
        this.loadingSubmitted = false
      }
    },
    async onSubmitForEdit () {
      try {
        this.loadingSubmitted = true

        let blogInfoClone = makeClone(this.blogInfo)

        const { data: { _message } } = await blogService.updateBlog(this.$route.params.id, blogInfoClone)

        this.$bvToast.toast(_message, { variant: 'success', solid: true })

        this.fetchBlogs()
        this.$router.push({ name: BLOG_LIST })
      } catch ({ response }) {
        handleErrorResponse(response)
      } finally {
        this.loadingSubmitted = false
      }
    },
    async onFetchBlogDetail () {
      await this.fetchBlogDetail({ id: this.$route.params.id })

      this.blogInfo = makeClone(this.blogDetail)
    }
  },
  data () {
    return {
      BLOG_LIST,
      blogInfo: {
        title: '',
        description: '',
        content: ''
      },
      loadingSubmitted: false
    }
  },
  created () {
    if (this.isEditMode) {
      this.onFetchBlogDetail()
    }
  }
}
</script>
