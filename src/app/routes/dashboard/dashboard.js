import egts from '../../service/example-ts-service';

require('./dashboard.less');

export default {
  template: require('./dashboard.html'),
  data() {
    return {
      name: 'Mike'
    }
  },
  computed: {
    sayHello() {
      return egts.sayHallo(this.name)
    }
  }
}
