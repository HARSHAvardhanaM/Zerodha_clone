let mongoose = require("mongoose");

let {BasicSchema} = require("../schemas/BasicSchema");

let BasicModel = mongoose.model("basic",BasicSchema);

module.exports = {BasicModel}