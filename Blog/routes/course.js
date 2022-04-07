const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courseController");

router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:slug", courseController.detail);
router.get("/", courseController.show);

module.exports = router;
