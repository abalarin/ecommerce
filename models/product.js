const mongoose = require("mongoose");
const config = require("../config/database");
const companySchema = require("./product")

const listingSchema = mongoose.Schema({
  owner: {
    type: String,
    required: true

  },
  productType: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    min: 1,
    required: true
  },
  price: {
    type: Number,
    min: 1,
    required: true
  },
  images: [{ data: Buffer, contentType: String }]
});

const Product = module.exports = mongoose.model("Product", productSchema);

module.exports.getProductById = function(id, callback){
  Product.findById(id, callback);
}

module.exports.getProductByType = function(productType, callback){
  const query = {productType: productType}
  Product.findOne(query, callback);
}

module.exports.getAllProducts= function(callback){
  Product.find({}, callback);
}

module.exports.addProduct = function(newProduct, callback){
  newProduct.save(callback);
}
