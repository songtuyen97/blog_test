import Master from '@/views/blog/master.vue'
import List from '@/views/blog/list.vue'
import Detail from '@/views/blog/detail.vue'
import Create from '@/views/blog/create.vue'
import {
  BLOG_INDEX,
  BLOG_LIST,
  BLOG_DETAIL,
  BLOG_CREATE,
  BLOG_EDIT
} from '@/configs/routesName'

export default {
  path: '/blogs',
  name: BLOG_INDEX,
  component: Master,
  redirect: { name: BLOG_LIST },
  children: [
    {
      path: '',
      name: BLOG_LIST,
      component: List
    },
    {
      path: ':id/detail',
      name: BLOG_DETAIL,
      component: Detail
    },
    {
      path: 'add',
      name: BLOG_CREATE,
      component: Create
    },
    {
      path: ':id/edit',
      name: BLOG_EDIT,
      component: Create
    }
  ]
}
