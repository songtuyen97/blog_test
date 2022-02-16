import { makeRequest } from '@/services/base'

const prefix = 'api/v1'

export const fetchBlogs = (params = {}) => {
  return makeRequest().get(`${prefix}/blogs`, { params })
}

export const createBlog = (data = {}) => {
  return makeRequest().post(`${prefix}/blogs`, data)
}

export const fetchBlogDetail = (id, params = {}) => {
  return makeRequest().get(`${prefix}/blogs/${id}`, { params })
}

export const updateBlog = (id, data = {}) => {
  return makeRequest().put(`${prefix}/blogs/${id}`, data)
}
