export default {
  template: require('./pagination.html'),
  props: {
    totalPages: {
      required: true
    },
    currentPage: {
      default: 1
    }
  },
  methods: {
    gotoPage(page) {
      if(page > 0 && page <= this.totalPages) {
        this.$emit('page-change', {page: page});
      } else {
        console.log('invalid page, ignoring ... ', page);
      }
    } 
  }
}