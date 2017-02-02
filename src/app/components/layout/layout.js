require('./layout.less');

import Navbar from 'app/components/navbar/navbar';

export default {
  name: 'layout',
  template: require('./layout.html'),
  computed: {
    mainClass() {
      const sidebarDefined = this.$slots['sidebar'];
      return sidebarDefined ? 'col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2' : 'col-md-12';
    }
  },
  components: {
    navbar: Navbar
  }
}