import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import BUser from "@/components/BUser.vue"
import CUser from "@/components/CUser.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/BUser",
      name: "BUser",
      component: BUser
    },
    {
      path: "/CUser",
      name: "CUser",
      component: CUser
    },


  ]
})
