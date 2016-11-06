export default {
  template: require('./navbar.html'),
  data: function() {
    return {
      links: [{
        title: 'Home',
        path: '/home'
      }, {
        title: 'About',
        path: '/about'
      }, {
        title: 'Example',
        path: '/example'
      }]
    }
  }
}