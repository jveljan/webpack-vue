import pagination from 'app/components/pagination/pagination';
import service from 'app/service/server-data-sim';

export default {
  template: require('./reports.html'),
  data() {
    return {
      loading: false,
      itemsPerPage: 4,
      currentPage: 1,
      totalPages: 0,
      items: []
    }
  },
  created() {
    this.loadData();
  },
  watch: {
    itemsPerPage() {
      this.currentPage = 1;
      this.loadData();
    }
  },
  methods: {
    loadData() {
      this.loading = true;
      service.getItems(this.currentPage, this.itemsPerPage)
        .then((data) => {
          this.items = data.content;
          this.totalPages = data.totalPages;
          this.loading = false;
        });
    },
    edit() {
      alert('edit');
    },
    remove() {
      alert('remove');
    },
    onPageChange(page) {
      this.currentPage = page;
      this.loadData();
    }
  },
  components: {
    pagination: pagination
  }
}

