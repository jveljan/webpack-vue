require('./layout.less');

import Navbar from 'app/components/navbar/navbar';

export default {
  template: require('./layout.html'),
  components: {
    navbar: Navbar
  }
}