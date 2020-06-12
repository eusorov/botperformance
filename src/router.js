import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
import Performance from "./views/Performance.vue";
import SinglePerformance from "./views/SinglePerformance.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

import Profile from "./views/Profile.vue";

import Index from "./views/Index.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      components: { default: Index, header: MainNavbar, footer: MainFooter},
      props: {
        header: { colorOnScroll: 300 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 300 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/performance",
      name: "performance",
      components: { default: Performance, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 40 },
        footer: { backgroundColor: "black" }
      }
    },    
    { path: '/performance/:id', 
      components: { default: SinglePerformance, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 40 },
        footer: { backgroundColor: "black" }
      }
     },
     {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },      
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
