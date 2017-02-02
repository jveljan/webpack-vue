import api from '../../service/api-service';

require('./dashboard.less');
export default {
  template: require('./dashboard.html'),
  created() {
    api.getPosts()
      .then( posts => {
        this.posts = posts;
        this.loading = false;
      })
      .catch(err => {
        this.err = err;
        this.loading = false;
      });
  },
  data() {
    return {
      loading: true,
      err: null,
      posts: null
    }
  },
  methods: {
    pLink(p) {
      return `#/post/${p.id}`;
    }
  }
}
