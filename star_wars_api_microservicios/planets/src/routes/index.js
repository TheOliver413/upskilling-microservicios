const Router = require("express");
const controller = require("../controller");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controller.getPlanets);
router.post("/", middlewares.planetValidations, controller.createPlanets);

module.exports = router;