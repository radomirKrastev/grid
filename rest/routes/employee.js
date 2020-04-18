const controllers = require("../controllers");
const router = require("express").Router();

router.get("/", controllers.employee.get);
router.delete("/:id", controllers.employee.delete);
module.exports = router;
