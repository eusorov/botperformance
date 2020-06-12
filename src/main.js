import Vue from 'vue'
import App from './App.vue'
import router from "./router";

Vue.config.productionTip = false

const NavbarStore = {
  showNavbar: false
};

import MaterialKit from "./plugins/material-kit";
Vue.use(MaterialKit);

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
