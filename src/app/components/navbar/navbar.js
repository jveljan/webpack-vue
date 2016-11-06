
export default {
  template: require('./navbar.html'),
  data() {
    return {
      links: [{
        title: 'Dashboard',
        path: '/dashboard'
      }, {
        title: 'Settings',
        path: '/settings'
      }, {
        title: 'Profile',
        path: '/profile'
      }, {
        title: 'Help',
        path: '/help'
      }, {
        title: 'Example',
        path: '/example'
      }, {
        title: 'Logount',
        path: '/logout'
      }]
    }
  }
}