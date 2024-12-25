const mongoose = require("mongoose");

const {SellSchema} = require("../schemas/SellSchema");

const SellModel = mongoose.model("sell" , SellSchema);

module.exports = {SellModel};