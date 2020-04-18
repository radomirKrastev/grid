const controllers = require("../controllers");
const router = require("express").Router();

router.get("/", controllers.employee.get);
router.delete("/:id", controllers.employee.delete);
// router.post("/filter", controllers.employee.post.filter);
// router.post("/remove", controllers.employee.post.remove);

// router.post('/register', controllers.user.post.register);

// router.post('/login', controllers.user.post.login);

// router.post('/logout', controllers.user.post.logout);

// router.put('/:id', controllers.user.put);

// router.delete('/:id', controllers.user.delete);

module.exports = router;
