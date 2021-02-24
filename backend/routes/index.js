const express = require("express");
const router = express.Router();

const addUserController = require("../controller/addUser");
const updateUserController = require("../controller/updateUser");
const countApiController = require("../controller/getApiCount");
const getUserController = require("../controller/getUsers");

const apiCounterMiddleware = require("../middleware/apiCounter");

router.post("/addUser", apiCounterMiddleware, addUserController.addUser);

router.put(
  "/updateUser",
  apiCounterMiddleware,
  updateUserController.updateUser
);

router.get("/getApiCount", countApiController.getApiCount);

router.get("/getUser", getUserController.getUser);

module.exports = router;
