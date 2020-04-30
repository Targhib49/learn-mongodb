const express = require("express");
const router = express.Router();

const { getAll, create, edit, deleteByID } = require("./controller");

router.get("/", getAll);
router.post("/", create);
router.put("/:id", edit);
router.delete("/:id", deleteByID);

module.exports = router;