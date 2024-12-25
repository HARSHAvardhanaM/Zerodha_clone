const mongoose = require("mongoose");

const {HoldingSchema} = require("../schemas/HoldingSchema");

const HoldingModel = mongoose.models.holding || mongoose.model("holding" , HoldingSchema);

module.exports = {HoldingModel};