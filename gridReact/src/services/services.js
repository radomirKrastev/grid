const restService = {
  load: function(filter, order) {
    let glue = "";
    filter && order ? (glue = "&") : (glue = "");

    return fetch(
      `http://localhost:9999${filter || order ? "?" : ""}${
        filter ? `filter=${filter}` : ""
      }${glue}${order ? `order=${order}` : ""}`
    ).then((res) => res.json());
  },

  remove: function(id) {
    return fetch(`http://localhost:9999/${id}`, {
      method: "DELETE"
    }).then((res) => res.json());
  }
};

export default restService;
