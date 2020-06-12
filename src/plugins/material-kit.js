//import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "@/assets/scss/material-kit.scss";
import "@/assets/demo.css";
import globalDirectives from "./globalDirectives";
import globalMixins from "./globalMixins";
import globalComponents from "./globalComponents";
//import VueLazyload from "vue-lazyload"; //layz load images

import { MdToolbar, MdButton, MdList, MdTooltip, MdIcon, MdCard, MdTable } from "vue-material/dist/components";

export default {
  install(Vue) {
    //Vue.use(VueMaterial);
    Vue.use(MdToolbar);
    Vue.use(MdButton);
    Vue.use(MdList);
    Vue.use(MdTooltip);
    Vue.use(MdIcon);
    Vue.use(MdCard);
    Vue.use(MdTable);
    
    Vue.use(globalDirectives);
    Vue.use(globalMixins);
    Vue.use(globalComponents);
    // Vue.use(VueLazyload, {
    //   observer: true,
    //   // optional
    //   observerOptions: {
    //     rootMargin: "0px",
    //     threshold: 0.1
    //   }
    // });
  }
};
