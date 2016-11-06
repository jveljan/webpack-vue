import pagination from 'app/components/pagination/pagination';

export default {
  template: require('./reports.html'),
  data() {
    return {
      itemsPerPage: 4,
      currentPage: 1
    }
  },
  computed: {
    items() {
      if(this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
      return getItems(this.currentPage, this.itemsPerPage)
    },
    totalPages() {
      return Math.ceil(items.length / this.itemsPerPage);
    } 
  },
  methods: {
    edit() {
      alert('edit');
    },
    remove() {
      alert('remove');
    },
    onPageChange(page) {
      this.currentPage = page;
    }
  },
  components: {
    pagination: pagination
  }
}



function getItems(page, perPage) {
  const start = perPage * (page - 1);
  const end = Math.min(start + perPage, items.length);
  const rv = [];
  for(let i=start; i<end; i++) {
    rv.push(items[i]);
  }
  return rv;
}

const items = [
  {
    color: "red",
    value: "#f00"
  },
  {
    color: "green",
    value: "#0f0"
  },
  {
    color: "blue",
    value: "#00f"
  },
  {
    color: "cyan",
    value: "#0ff"
  },
  {
    color: "magenta",
    value: "#f0f"
  },
  {
    color: "yellow",
    value: "#ff0"
  },
  {
    color: "black",
    value: "#000"
  }
];
