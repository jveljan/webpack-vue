export default {
  name: 'pgnatio',
  template: require('./pagination.html'),
  props: {
    pgInfo: {
      page: 0,
      total: 0,
      itemsPerPage: 0
    },
    itemsPerPageSelections: {
      default: () => { return [] }
    } // [5, 10, 20, 40]
  },
  data() {
    return {
      localItemsPerPage: this.pgInfo.itemsPerPage
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.pgInfo.total / this.pgInfo.itemsPerPage);
    }
  },
  watch: {
    localItemsPerPage() {
      this.$emit('change-items-per-page', this.localItemsPerPage);
    }
  },
  methods: {
    gotoPage(page) {
      if(page > 0 && page <= this.totalPages) {
        this.$emit('change-page', page);
      } else {
        console.log('invalid page, ignoring ... ', page);
      }
    } 
  }
}