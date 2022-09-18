const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {type:String, required: [true, "Title is require"]},
    price: {type:Number, required: [true, "Price is require"]},
    description: {type:String, required: [true, "Description is require"]}
}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;