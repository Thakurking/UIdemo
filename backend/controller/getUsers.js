const mongoose = require("mongoose");

const User = require("../models/user");

exports.getUser = async (req, res) => {
  try {
    const getUsers = await User.find({});
    if (getUsers.length > 0) {
      return res.json({
        message: "Showing All The Users",
        isSuccess: true,
        getUsers,
      });
    } else {
      return res.json({ message: "No User Found", isSuccess: false });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Internal Server Error Please Try Again",
      isSuccess: false,
    });
  }
};
