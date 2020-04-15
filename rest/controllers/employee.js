const models = require("../models");

module.exports = {
  get: (req, res, next) => {
    models.Employee.find()
      .then((employees) => res.send(employees))
      .catch(next);
  },

  getFiltered: (req, res, next) => {
    models.Employee.find()
      .then((employees) => res.send(employees))
      .catch(next);
  }
};
