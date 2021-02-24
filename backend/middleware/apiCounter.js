const mongoose = require("mongoose");

const apiCounter = require("../models/apiCount");

module.exports = async (req, res, next) => {
  try {
    if (req.originalUrl == "/addUser") {
      const countAddAPI = await apiCounter.updateOne(
        {},
        { $inc: { addAPICounter: 1 } },
        { upsert: true }
      );
      if (countAddAPI) {
        next();
      }
    }
    if (req.originalUrl == "/updateUser") {
      const countUpdateAPI = await apiCounter.updateOne(
        {},
        { $inc: { updateAPICounter: 1 } },
        { upsert: true }
      );
      if (countUpdateAPI) {
        next();
      }
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error", isSuccess: false });
  }
};
