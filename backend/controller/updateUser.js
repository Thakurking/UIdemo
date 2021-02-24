const mongoose = require("mongoose");
const validator = require("validator");

const User = require("../models/user");

exports.updateUser = async (req, res) => {
  try {
    const { updateData } = req.body;
    if (!updateData.email || !updateData.phone || !updateData.name) {
      return res.json({
        message: "Please Add All The Fields",
        isSuccess: false,
      });
    }
    if (!validator.isEmail(updateData.email)) {
      return res.json({ message: "Please Add Valid Email", isSuccess: false });
    }
    if (!validator.isMobilePhone(updateData.phone)) {
      return res.json({
        message: "Please Add Valid Mobile Number",
        isSuccess: false,
      });
    }
    const updateUser = await User.updateOne(
      { email: updateData.email },
      { $set: updateData },
      {
        new: true,
      }
    );
    if (updateUser) {
      return res.json({ message: "Data Updated", isSuccess: true, updateData });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Internal Server Please Try Again",
      isSuccess: false,
    });
  }
};
