import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define route components
import routes from './routes';

// 3. Create the router
const router = new VueRouter({
  routes: routes
})

// register global components in a mixin...
import layout from 'app/components/layout/layout';
import sidebar from 'app/components/sidebar/sidebar';
import loadingWrap from 'app/components/loading-wrap/loading-wrap';

Vue.mixin({
  components: {
    layout,
    sidebar,
    loadingWrap
  }
});

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
require('./app.less');
new Vue({
  router,
  template: require('./app.html')
}).$mount('#app')