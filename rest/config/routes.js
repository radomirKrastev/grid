const router = require("../routes");
// const employeeController = require("../controllers");

module.exports = (app) => {
  app.use("/", router.employee);

  app.use("*", (req, res, next) =>
    res.send("<h1> Something went wrong. Try again. :thumbsup: </h1>")
  );
};
