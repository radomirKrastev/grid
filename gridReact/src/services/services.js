const employeeService = {
  load: function() {
    return fetch(`http://localhost:9999`).then((res) => res.json());
  },
  filter: function(criterion) {
    return fetch(`http://localhost:9999/filter`, {
      body: JSON.stringify(criterion),
      method: "POST",
      headers: {
        "Content-type": "application/json"
      }
    }).then((res) => res.json());
  },
  remove: function(criterion) {
    return fetch(`http://localhost:9999/remove`, {
      body: JSON.stringify(criterion),
      method: "POST",
      headers: {
        "Content-type": "application/json"
      }
    }).then((res) => res.json());
  }
};

export default employeeService;
