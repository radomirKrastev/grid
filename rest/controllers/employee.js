const models = require("../models");

module.exports = {
  get: (req, res, next) => {
    const filter = req.query.filter;
    console.log(filter);
    filter
      ? models.Employee.find({ department: `${filter}` })
          .then((employees) => res.send(employees))
          .catch(next)
      : models.Employee.find()
          .then((employees) => res.send(employees))
          .catch(next);
  },

  // post: {
  //   filter: (req, res, next) => {
  //     const { criterion } = req.body;

  //     models.Employee.find({ department: `${criterion}` })
  //       .then((employees) => res.send(employees))
  //       .catch(next);
  //   },
  // }
  delete: (req, res, next) => {
    // const { id } = req.body;
    // console.log(req);
    console.log(req.params.id);
    const id = req.params.id;

    models.Employee.deleteOne({ id: `${id}` })
      .then((result) => {
        res.send(result);
      })
      .catch(next);
  }
};
