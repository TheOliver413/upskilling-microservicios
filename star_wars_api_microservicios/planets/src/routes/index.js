const Router = require("express");
const controller = require("../controller");

const router = Router();

router.get("/", controller.getPlanets);
router.post("/", controller.createPlanets);

module.exports = router;