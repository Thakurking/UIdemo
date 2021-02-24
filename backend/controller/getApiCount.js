const mongoose = require("mongoose");

const API = require("../models/apiCount")

exports.getApiCount = async (req, res) => {
    const addApiCount = await API.find({}).select("addAPICounter");
    const updateApiCount = await API.find({}).select("updateAPICounter");
    if(addApiCount && updateApiCount){
        return res.json({
          message: "Showing API Counts",
          isSuccess: true,
          addApiCount,
          updateApiCount,
        });
    }
};
