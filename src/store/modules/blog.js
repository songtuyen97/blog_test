import * as blogService from '@/services/blog'
import { handleErrorResponse } from '@/configs/methods'

const defaultState = {
  blogs: [],
  pagination: {
    total: 32 // the mock API dont have pagination
  },
  blogDetail: {},
  loading: false,
  blogsParams: {
    sortBy: 'createdAt',
    order: 'desc',
    search: '',
    l: 10,
    p: 1
  }
}

const getters = {
  blogs: state => state.blogs,
  pagination: state => state.pagination,
  blogDetail: state => state.blogDetail,
  loading: state => state.loading,
  blogsParams: state => state.blogsParams
}

const mutations = {
  SET_LOADING (state, status) {
    state.loading = status
  },
  SET_BLOGS (state, blogs = []) {
    state.blogs = blogs
  },
  SET_BLOG_DETAIL (state, blogDetail = {}) {
    state.blogDetail = blogDetail
  }
}

const actions = {
  async fetchBlogs ({ commit, getters }, paramsMore = {}) {
    try {
      commit('SET_LOADING', true)

      const params = {
        ...getters.blogsParams,
        ...paramsMore
      }
      const { data: { _data } } = await blogService.fetchBlogs(params)

      commit('SET_BLOGS', _data)
    } catch ({ response }) {
      handleErrorResponse(response)
    } finally {
      commit('SET_LOADING', false)
    }
  },
  async fetchBlogDetail ({ commit }, params = {}) {
    try {
      commit('SET_LOADING', true)

      const id = params.id
      delete params.id
      const { data: { _data } } = await blogService.fetchBlogDetail(id, params)

      commit('SET_BLOG_DETAIL', _data)
    } catch ({ response }) {
      handleErrorResponse(response)
    } finally {
      commit('SET_LOADING', false)
    }
  }
}

export default {
  namespaced: true,
  state: defaultState,
  getters,
  mutations,
  actions
}
