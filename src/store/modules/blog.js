const defaultState = {
  blogs: [],
  loading: false
}

const getters = {
  blogs: state => state.blogs,
  loading: state => state.loading
}

const mutations = {
  SET_LOADING (state, status) {
    state.loading = status
  },
  SET_BLOGS (state, blogs) {
    state.blogs = blogs
  }
}

const actions = {

}

export default {
  namespaced: true,
  state: defaultState,
  getters,
  mutations,
  actions
}
