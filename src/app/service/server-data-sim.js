
export default {
  getItems(page, itemsPerPage) {
    const start = itemsPerPage * (page - 1);
    const end = Math.min(start + itemsPerPage, items.length);
    const rv = [];
    for(let i=start; i<end; i++) {
      rv.push(items[i]);
    }
    return new window.Promise((resolve) => {
      setTimeout( () => {
        resolve({
          total: items.length,
          totalPages: Math.ceil(items.length / itemsPerPage),
          content: rv
        });
      }, Math.random() * 500);
    });
  }
}

const items = [
  {
    id: 1,
    color: "red",
    value: "#f00"
  },
  {
    id: 2,
    color: "green",
    value: "#0f0"
  },
  {
    id: 3,
    color: "blue",
    value: "#00f"
  },
  {
    id: 4,
    color: "cyan",
    value: "#0ff"
  },
  {
    id: 5,
    color: "magenta",
    value: "#f0f"
  },
  {
    id: 6,
    color: "yellow",
    value: "#ff0"
  },
  {
    id: 7,
    color: "black",
    value: "#000"
  }
];