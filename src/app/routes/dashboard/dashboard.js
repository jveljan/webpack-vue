import api from '../../service/api-service';

require('./dashboard.less');
export default {
  template: require('./dashboard.html'),
  created() {
    api.getPosts()
      .then( resp => {
        this.loading = false;
        this.posts = resp.data;
      })
      .catch(err => {
        this.loading = false;
        this.err = err;
      });
  },
  data() {
    return {
      loading: true,
      err: null,
      posts: null
    }
  }
}
