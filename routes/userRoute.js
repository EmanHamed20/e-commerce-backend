const express = require("express");
const router = express.Router();

const {
  AddUser,
} = require("../controllers/userController");


router.post("/signup", AddUser);



module.exports = router;
