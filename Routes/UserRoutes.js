const express = require("express");
const app = express();
const router = express.Router();
const {
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../Controller/UserController");

router.get("/", getAllUser);
router.get("/:id", getSingleUser);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
