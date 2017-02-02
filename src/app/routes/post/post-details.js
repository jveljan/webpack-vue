import api from '../../service/api-service';

export default {
  created() {
    api.getPostDetails(this.$route.params.id)
      .then(r => {
        this.res = r;
        this.loading = false;
      }).catch( err => {
        this.err = err;
        this.loading = false;
      });
  },
  data() {
    return {
      err: null,
      loading: true,
      res: null
    }
  },
  template: require('./post-details.html')
}