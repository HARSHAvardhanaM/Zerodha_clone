const {Schema} = require("mongoose");

const BasicSchema = new Schema({
    margin : Number,
    holdingBought : Number,
    holdingsNow : Number
});

module.exports = {BasicSchema}