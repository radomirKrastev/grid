const employeeService = {
  load: function(filter) {
    return fetch(`http://localhost:9999${filter ? `?filter=${filter}` : ""}`).then((res) =>
      res.json()
    );
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
