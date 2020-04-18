const models = require("../models");

module.exports = {
  get: (req, res, next) => {
    const filter = req.query.filter;
    const order = req.query.order;
    const sortObject = {};
    sortObject[order] = "asc";

    (filter ? models.Employee.find({ department: `${filter}` }) : models.Employee.find())
      .sort(sortObject)
      .then((employees) => res.send(employees))
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;

    models.Employee.deleteOne({ id: `${id}` })
      .then((result) => {
        res.send(result);
      })
      .catch(next);
  }
};
