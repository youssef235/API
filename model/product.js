// model/product.js  
const mongoose = require('mongoose');  

const productSchema = new mongoose.Schema({  
  name: { type: String, required: true },  
  price: { type: Number, required: true },  
  // Add other fields as necessary  
});  

const Product = mongoose.model('Product', productSchema);  

module.exports = Product;