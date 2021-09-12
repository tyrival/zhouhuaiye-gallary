import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import router from './router'
import store from './store'
import App from './App'
import "./fonts/iconfont.css"

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueClipboard)

const app = new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')

/**
 * 屏蔽右键菜单
 * @returns {boolean}
 */
document.oncontextmenu = function () {
    return false
}
