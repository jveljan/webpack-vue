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
import Layout from 'app/components/layout/layout';
import Sidebar from 'app/components/sidebar/sidebar';
Vue.mixin({
  components: {
    layout: Layout,
    sidebar: Sidebar
  }
});

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
  router,
  template: require('./app.html')
}).$mount('#app')