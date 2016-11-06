import pagination from 'app/components/pagination/pagination';
import service from 'app/service/server-data-sim';

export default {
  name: 'reports',
  template: require('./reports.html'),
  data() {
    return {
      loading: false,
      pageInfo: {
        page: 1,
        total: 0,
        itemsPerPage: 5  
      },
      items: []
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.loading = true;
      service.getItems(this.pageInfo.page, this.pageInfo.itemsPerPage)
        .then((data) => {
          this.items = data.content;
          this.pageInfo.total = data.total;
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
      this.pageInfo.page = page;
      this.loadData();
    },
    onItemsPerPageChange(itemsPerPage) {
      this.pageInfo.itemsPerPage = itemsPerPage;
      this.pageInfo.page = 1; // reset to first page
      this.loadData();
    }
  },
  components: {
    pagination: pagination
  }
}

