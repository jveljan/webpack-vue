require('./login.less');
import auth from '../../service/auth-service';

export default {
  template: require('./login.html'),

  data () {
    return {
      email: 'joe@example.com',
      pass: '',
      error: false
    }
  },

  methods: {
    login () {
      auth.login(this.email, this.pass, loggedIn => {
        if (!loggedIn) {
          this.error = true
        } else {
          this.$router.replace(this.$route.query.redirect || '/')
        }
      })
    }
  }
}