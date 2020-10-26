import Vue from 'vue'
import Element, { Loading } from 'element-ui'
import 'element-ui/packages/theme-chalk/src/index.scss'
// import '../element-variables.scss'
import 'element-ui/lib/theme-chalk/display.css'
Vue.use(Element)
Vue.$loading = Loading.service
