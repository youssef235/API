// controllers/productController.js  
const Product = require('../model/product');  

const getProducts = async (req, res) => {  
  try {  
    const products = await Product.find();  
    res.json(products);  
  } catch (error) {  
    res.status(500).json({ message: error.message });  
  }  
};  

const createProduct = async (req, res) => {  
  const newProduct = new Product({  
    name: req.body.name,  
    price: req.body.price,  
  });  

  try {  
    const savedProduct = await newProduct.save();  
    res.status(201).json(savedProduct);  
  } catch (error) {  
    res.status(400).json({ message: error.message });  
  }  
};  

module.exports = { getProducts, createProduct };