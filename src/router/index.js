import Vue from 'vue'
import Router from 'vue-router'
const Viewport = () => import('@/views/Viewport')

Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'Viewport',
        component: Viewport
    }]
})

export default router
