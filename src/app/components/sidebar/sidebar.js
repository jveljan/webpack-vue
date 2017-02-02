export default {
  name: 'sidebar',
  template: require('./sidebar.html'),
  props: {
    area: {
      required: true
    }
  },
  components: {
    dashboard: {
      template: require('./dashboard.html')
    },
    settings: {
      template: require('./settings.html')
    }
  }
}