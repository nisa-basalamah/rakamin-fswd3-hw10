const express = require("express");
const router = express.Router();
const MovieController = require("../controllers/moviesController.js");
const upload = require("../middlewares/multer.js");

router.get("/", MovieController.findAll);
router.get("/:id", MovieController.findOne);
router.post("/", upload.single("photo"), MovieController.create);
router.put("/:id", upload.single("photo"), MovieController.update);
router.delete("/:id", MovieController.delete);

module.exports = router;
