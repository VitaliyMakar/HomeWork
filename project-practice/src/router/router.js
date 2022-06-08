import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Users from '../pages/Users.vue'
import Posts from '../pages/Posts.vue'

import PostsNotStore from '../pages/PostsNotStore.vue'
import PostDetail from '../components/Posts/PostDetail.vue'
import LikesCounter from '../pages/LikesCounter.vue'
import About from '../pages/About.vue'

const routes = [
    {
        path: '/',
        // name: 'Home',
        component: Home
    },
    {
        path: '/users',
        // name: 'Posts',
        component: Users
    },
    {
        path: '/posts',
        // name: 'Posts',
        component: Posts
    },
    {
        path: '/posts-not-store',
        // name: 'PostsNotStore',
        component: PostsNotStore
    },
    {
        path: '/likes-counter',
        // name: 'LikesCounter',
        component: LikesCounter
    },
    {
        path: '/about',
        // name: 'About',
        component: About
    },
    {
        path: '/posts/:id',
        // name: 'PostDetail',
        component: PostDetail
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
  })

  export default router