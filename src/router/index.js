import { createRouter, createWebHistory } from 'vue-router'
import movieRouter from './Movie'
import mineRouter from './Mine'
import cinemaRouter from './Cinema'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
      path : '/*',
      redirect : '/Movie'
    }
  ]
})

export default router
