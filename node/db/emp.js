const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:String,
    userId: String,
    company:String
});

module.exports = mongoose.model("products",productSchema);