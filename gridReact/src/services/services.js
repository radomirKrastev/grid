const employeeService = {
  load: function() {
    return fetch(`http://localhost:9999`).then((res) => res.json());
  },
  filter: function(criteria) {
    return fetch(`http://localhost:9999/filter`, {
      body: JSON.stringify(criteria),
      method: "POST",
      headers: {
        "Content-type": "application/json"
      }
    }).then((res) => res.text());
  }

  //   filter: function() {
  //     return fetch(`http://localhost:9999/filter`).then((res) => res.json());
  //   }
};

export default employeeService;