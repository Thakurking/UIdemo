const mongoose = require("mongoose");
const validator = require("validator");

const User = require("../models/user");

exports.addUser = async (req, res) => {
  try {
    const { email, name, phone } = req.body;
    if (!email || !name || !phone) {
      return res.json({ message: "Please Add All Fields", isSuccess: false });
    }
    if (!validator.isEmail(email)) {
      return res.json({
        message: "Please Enter Valid Email",
        isSuccess: false,
      });
    }
    if (!validator.isMobilePhone(phone)) {
      return res.json({
        message: "Please Enter Valid Phone Number",
        isSuccess: false,
      });
    }
    let user = new User({
      email: email,                                                                                                                                                                                                                                                                         
      phone: phone,
      name: name,
    });
    console.log(user)
    if (await user.save()) {
      return res.json({ message: "Data Saved", isSuccess: true, user });                                                                                         
    }
  } catch (error) {
    console.log(error);
    return res.json({
      message: "Internal Server Error Please Try Again",
      isSuccess: false,
    });
  }
};
