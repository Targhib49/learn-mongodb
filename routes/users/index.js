const express = require("express");
const router = express.Router();

const { getAll, create, edit, deleteByID, login } = require("./controller");

router.get("/", getAll);
router.post("/", create);
router.put("/:id", edit);
router.delete("/:id", deleteByID);
router.post("/login", login);

module.exports = router;
