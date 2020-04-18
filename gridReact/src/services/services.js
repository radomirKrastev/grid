const employeeService = {
  load: function(filter, order) {
    let glue = "";
    filter && order ? (glue = "&") : (glue = "");

    return fetch(
      `http://localhost:9999${filter || order ? "?" : ""}${
        filter ? `filter=${filter}` : ""
      }${glue}${order ? `order=${order}` : ""}`
    ).then((res) => res.json());
  },
  // filter: function(criterion) {
  //   return fetch(`http://localhost:9999/filter`, {
  //     body: JSON.stringify(criterion),
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json"
  //     }
  //   }).then((res) => res.json());
  // },
  remove: function(id) {
    return fetch(`http://localhost:9999/${id}`, {
      method: "DELETE"
    }).then((res) => res.json());
  }
};

export default employeeService;
