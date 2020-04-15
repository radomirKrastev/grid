const models = require("../models");

module.exports = {
  get: (req, res, next) => {
    models.Employee.find()
      .then((employees) => res.send(employees))
      .catch(next);
  },

  post: {
    filter: (req, res, next) => {
      const { criterion } = req.body;

      models.Employee.find({ department: `${criterion}` })
        .then((employees) => res.send(employees))
        .catch(next);
    },
    remove: (req, res, next) => {
      const { id } = req.body;

      models.Employee.deleteOne({ id: `${id}` })
        .then((result) => {
          res.send(result);
        })
        .catch(next);
    }
  }
};
