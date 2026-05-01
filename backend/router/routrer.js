const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const { applyInternship } = require("../controller/controller");
const { getOpenings } = require("../controller/openingController");
const { contactController } = require("../controller/contactController");

router.post("/apply", upload.single("file"), applyInternship);
router.get("/openings", getOpenings);

router.post("/contact", contactController);


module.exports = router;